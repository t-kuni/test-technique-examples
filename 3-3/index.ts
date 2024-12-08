export interface RandomGenerator {
    generate(): number;
}

export class RandomGeneratorImpl implements RandomGenerator {
    generate(): number {
        // 副作用以外が混ざってしまっている
        return Math.floor(Math.random() * 100) + 1;
    }
}

export class Main {
    private randomGenerator: RandomGenerator;

    constructor(randomGenerator: RandomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    execute() {
        return this.randomGenerator.generate();
    }
}

if (require.main === module) {
    const main = new Main(new RandomGeneratorImpl())
    const result = main.execute()
    console.log(`Generated: ${result}`)
}