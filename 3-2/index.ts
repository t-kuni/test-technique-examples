export interface RandomGenerator {
    generate(): number;
}

export class RandomGeneratorImpl implements RandomGenerator {
    generate(): number {
        return Math.random();
    }
}

export class Main {
    private randomGenerator: RandomGenerator;

    constructor(randomGenerator: RandomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    execute() {
        const r = this.randomGenerator.generate()
        return Math.floor(r * 100) + 1;
    }
}

if (require.main === module) {
    const main = new Main(new RandomGeneratorImpl())
    const result = main.execute()
    console.log(`Generated: ${result}`)
}