interface RandomGenerator {
    generate(): number;
}

class RandomGeneratorImpl {
    generate(): number {
        return Math.random()
    }
}

class Job {
    private randomGenerator: RandomGenerator;

    constructor(randomGenerator: RandomGenerator ) {
        this.randomGenerator = randomGenerator;
    }

    execute() {
        const r = this.randomGenerator.generate()
        console.log(`Generated: ${r}`)
    }
}


const randomGenerator = new RandomGeneratorImpl()
const job = new Job(randomGenerator)
job.execute()