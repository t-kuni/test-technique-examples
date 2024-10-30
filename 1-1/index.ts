// ①メイン処理モジュール
class Main {
    execute() {
        const r = Math.random()
        console.log(`Generated: ${r}`)
    }
}

// ⑥メイン処理モジュールをインスタンス化して実行します
const main = new Main()
main.execute()