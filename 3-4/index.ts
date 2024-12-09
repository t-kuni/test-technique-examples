export interface SleepTimer {
    sleep(ms: number): Promise<void>;
}

export class SleepTimerImpl implements SleepTimer {
    sleep(ms: number): Promise<void>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export class Main {
    private sleepTimer: SleepTimer;

    constructor(sleepTimer: SleepTimer) {
        this.sleepTimer = sleepTimer;
    }

    execute() {
        this.sleepTimer.sleep(10000)
    }
}

if (require.main === module) {
    const main = new Main(new SleepTimerImpl())
    main.execute()
    console.log(`Finished`)
}