import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.todos.deleteMany()

  await prisma.todos.createMany({
    data: [
      {
        id: 'f48a1a55-8db0-4f2b-a31f-11b8a6e04d57',
        title: 'Buy groceries',
        description: 'Need to buy milk, bread, and eggs'
      },
      {
        id: 'bc8bca78-98a3-4c1f-bc38-8e9b68dbfa63',
        title: 'Finish project',
        description: 'Complete the presentation for the project'
      },
      {
        id: 'de6a8a2f-9b4d-4a5e-8cde-14e8f49d2f7d',
        title: 'Clean the house',
        description: 'Do a thorough cleaning of the living room'
      },
      {
        id: 'ae9f8b12-567a-4ba7-9e74-07a17f512f17',
        title: 'Read a book',
        description: 'Start reading the new novel'
      },
      {
        id: 'b7a7a6d9-e4e8-4d6a-9fc2-84d9f0123f9a',
        title: 'Workout',
        description: 'Go to the gym for an hour of exercise'
      },
      {
        id: 'f264b93f-33eb-4b88-9d56-5023a5b23c9f',
        title: 'Call mom',
        description: 'Catch up with mom over the phone'
      },
      {
        id: '98e8b4ef-850f-44d6-8664-d1be441d891b',
        title: 'Plan vacation',
        description: 'Research and plan the next family vacation'
      },
      {
        id: 'f3578e5c-e63f-4f60-8961-92f8721abdbd',
        title: 'Pay bills',
        description: 'Pay the electricity and water bills'
      },
      {
        id: 'd3b3d8f5-4ef9-4f6c-aabb-2e5488ef91c8',
        title: 'Attend meeting',
        description: 'Join the team meeting at 10 AM'
      },
      {
        id: 'accde1bc-9f16-4b1b-bc69-3b5e8459d52d',
        title: 'Submit report',
        description: 'Send the monthly report to the manager'
      }
    ]
  })

  console.log('Seed data inserted successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })