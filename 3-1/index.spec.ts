import {jest, describe, it, expect} from '@jest/globals';
import {Main} from "./index";

describe('Main', () => {
    it('execute()', () => {
        const main = new Main();
        const actual = main.execute();
        expect(actual).toBe(10);
    });
});