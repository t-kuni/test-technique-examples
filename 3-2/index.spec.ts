import {jest, describe, it, expect} from '@jest/globals';
import {Main, RandomGenerator} from "./index";

describe('Main#execute()', () => {
    it('乱数が0.0の場合1を返すこと', () => {
        const mockRandomGenerator: RandomGenerator = {
            generate: jest.fn().mockReturnValue(0.0)
        } as RandomGenerator;

        const main = new Main(mockRandomGenerator);
        const actual = main.execute();

        expect(actual).toBe(1);
    });
    it('乱数が0.9999の場合100を返すこと', () => {
        const mockRandomGenerator: RandomGenerator = {
            generate: jest.fn().mockReturnValue(0.9999)
        } as RandomGenerator;

        const main = new Main(mockRandomGenerator);
        const actual = main.execute();

        expect(actual).toBe(100);
    });
});