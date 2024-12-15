import {jest, describe, it, expect} from '@jest/globals';
import {Main, Timer} from "./index";

describe('Main#execute()', () => {
    it('翌日の日付が取得できること', () => {
        const mockTimer: Timer = {
            now: jest.fn().mockReturnValue(new Date(2024, 4, 20, 12, 30, 0))
        } as Timer;

        const main = new Main(mockTimer);
        const actual = main.execute();

        expect(actual).toBe("2024年5月21日");
    });
    it('月末の場合も正しく翌日の日付を取得できること', () => {
        const mockTimer: Timer = {
            now: jest.fn().mockReturnValue(new Date(2024, 11, 31, 12, 30, 0))
        } as Timer;

        const main = new Main(mockTimer);
        const actual = main.execute();

        expect(actual).toBe("2025年1月1日");
    });
});