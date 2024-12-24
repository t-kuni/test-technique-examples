import {jest, describe, it, expect} from '@jest/globals';
import {Main, EnvReader, Env} from "./index";

describe('Main', () => {
    it('execute()', () => {
        const mockEnvReader: EnvReader = {
            read: jest.fn().mockReturnValue({
                appName: "test example app",
                logLevel: "debug",
            } as Env)
        } as EnvReader;

        const main = new Main(mockEnvReader);
        const actual = main.execute();

        expect(actual).toBe("APP_NAME: test example app, LOG_LEVEL: debug");
    });
});