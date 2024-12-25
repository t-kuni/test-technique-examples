import {describe, it, expect} from '@jest/globals';
import {Main} from "./index";
import * as dotenv from 'dotenv';

describe('Main', () => {
    it('execute()', () => {
        dotenv.config({ path: '.env.testing' })

        const main = new Main();
        const actual = main.execute();

        expect(actual).toBe("APP_NAME: testing, LOG_LEVEL: debug");
    });
});