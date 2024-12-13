export interface Timer {
    now(): Date;
}

export class TimerImpl implements Timer {
    now(): Date {
        return new Date();
    }
}

export class Main {
    private timer: Timer;

    constructor(timer: Timer) {
        this.timer = timer;
    }

    execute() {
        const d = this.timer.now()
        d.setDate(d.getDate() + 1);
        return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
}

if (require.main === module) {
    const main = new Main(new TimerImpl())
    const result = main.execute()
    console.log(`Tomorrow: ${result}`)
}