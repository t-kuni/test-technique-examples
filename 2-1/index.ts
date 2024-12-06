export interface Calculator {
    add(a: number, b: number): number;
}

export class CalculatorImpl {
    add(a: number, b: number): number {
        return a + b;
    }
}

// ③メイン処理モジュール
export class Main {
    private calculator: Calculator;

    //
    constructor(calculator: Calculator ) {
        this.calculator = calculator;
    }

    execute() {
        const a = 10;
        const b = 20;
        const c = 30;
        const result1 = this.calculator.add(a, b)
        const result2 = this.calculator.add(result1, c)
        console.log(`${a} + ${b} + ${c} = ${result2}`)
    }
}

if (require.main === module) {
    const randomGenerator = new CalculatorImpl()
    const main = new Main(randomGenerator)
    main.execute()
}