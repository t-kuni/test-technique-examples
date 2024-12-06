import { jest, describe, it } from '@jest/globals';

describe('Main', () => {
    it('execute()', () => {
        // ⑦ 乱数生成モジュールのモックを作成します
        const mockRandomGenerator: RandomGenerator = {
            generate: jest.fn().mockReturnValue(0.5)
        } as RandomGenerator;

        // ８ メイン処理モジュールをインスタンス化して実行します
        // このとき、乱数生成モジュールのモックを渡します
        const main = new Main(mockRandomGenerator);
        main.execute();
    });
});