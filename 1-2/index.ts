// ①乱数生成ジュールのインタフェース
export interface RandomGenerator {
    generate(): number;
}

// ②乱数生成モジュールの実装
export class RandomGeneratorImpl {
    generate(): number {
        return Math.random()
    }
}

// ③メイン処理モジュール
export class Main {
    private randomGenerator: RandomGenerator;

    //
    constructor(randomGenerator: RandomGenerator ) {
        // ④コンストラクタの引数で乱数生成モジュールを受け取ります
        this.randomGenerator = randomGenerator;
    }

    execute() {
        // ⑤メイン処理では、受け取った乱数生成モジュールを使って乱数を生成します
        const r = this.randomGenerator.generate()
        console.log(`Generated: ${r}`)
    }
}

// ⑥メイン処理モジュールをインスタンス化して実行します
// このとき、乱数生成モジュールの実装を渡します
const randomGenerator = new RandomGeneratorImpl()
const main = new Main(randomGenerator)
main.execute()