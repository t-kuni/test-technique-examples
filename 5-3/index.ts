import * as dotenv from 'dotenv';

export class Main {
    execute() {
        return `APP_NAME: ${process.env.APP_NAME}, LOG_LEVEL: ${process.env.LOG_LEVEL}`;
    }
}

if (require.main === module) {
    dotenv.config({ path: '.env' })
    const main = new Main()
    const result = main.execute()
    console.log(result)
}