import {jest, describe, it, expect} from '@jest/globals';
import {Main} from "./index";

describe('Main', () => {
    it('execute()', () => {
        process.env.APP_NAME = "test example app";
        process.env.LOG_LEVEL = "debug";

        const main = new Main();
        const actual = main.execute();

        expect(actual).toBe("APP_NAME: test example app, LOG_LEVEL: debug");
    });
});