import {jest, describe, it, expect} from '@jest/globals';
import {Main, SleepTimer} from "./index";

describe('Main', () => {
    it('execute()', () => {
        const mockSleepTimer: SleepTimer = {
            sleep: jest.fn()
        } as SleepTimer;

        const main = new Main(mockSleepTimer);
        main.execute();

        // 呼び出し回数の検証
        expect(mockSleepTimer.sleep).toHaveBeenCalledTimes(1)

        // 1回目呼び出し時の引数の検証
        expect(mockSleepTimer.sleep).toHaveBeenNthCalledWith(1, 10000)
    });
});