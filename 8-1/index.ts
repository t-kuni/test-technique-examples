import { PrismaClient } from '@prisma/client'

interface TodoRepository {
  updateDescription(id: string, description: string): Promise<void>;
}

class TodoRepositoryImpl implements TodoRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async updateDescription(id: string, description: string): Promise<void> {
    await this.prisma.todos.update({
      where: { id },
      data: { description },
    });
  }
}

class Main {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute() {
    const todoId = 'b7a7a6d9-e4e8-4d6a-9fc2-84d9f0123f9a';
    const newDescription = 'Updated: Go to the gym for an intense 90-minute workout session';

    const prisma = new PrismaClient();
    
    try {
      await prisma.$transaction(async (tx) => {
        const txTodoRepository = new TodoRepositoryImpl(tx as PrismaClient);
        await txTodoRepository.updateDescription(todoId, newDescription);
      });
      console.log(`Successfully updated todo description for ID: ${todoId}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

const prisma = new PrismaClient();
const todoRepository = new TodoRepositoryImpl(prisma);
const main = new Main(todoRepository);
main.execute();