export interface EnvReader {
    read(): Env;
}

export type Env = {
    appName: string;
    logLevel: string;
};

export class EnvReaderImpl implements EnvReader {
    read(): Env {
        return {
            appName: process.env.APP_NAME,
            logLevel: process.env.LOG_LEVEL,
        }
    }
}

export class Main {
    private envReader: EnvReader;

    constructor(envReader: EnvReader) {
        this.envReader = envReader;
    }

    execute() {
        const env = this.envReader.read()
        return `APP_NAME: ${env.appName}, LOG_LEVEL: ${env.logLevel}`;
    }
}

if (require.main === module) {
    const main = new Main(new EnvReaderImpl())
    const result = main.execute()
    console.log(result)
}