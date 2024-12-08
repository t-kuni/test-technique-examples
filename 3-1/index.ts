export class Main {
    execute(): number {
        return Math.floor(Math.random() * 100) + 1;
    }
}

if (require.main === module) {
    const main = new Main()
    const result = main.execute()
    console.log(`Generated: ${result}`)
}