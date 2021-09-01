/**
 * Records the time it takes to go from one point to another during runtime
 */
export default class ExecutionTimeCalculator {
    static ms: number = 0;

    private static startTime: Date = null;

    /**
     * Starting point of execution
     */
    static start() {
        this.ms = 0;
        this.startTime = new Date();
    }

    /**
     * Ending point of execution
     */
    static end(printLog: boolean = false): string | void {
        this.ms = new Date().getTime() - this.startTime.getTime();

        if (printLog === true) {
            this.log();
            return this.toString();
        }
    }

    /**
     * Prints the execution runtime to the console
     */
    static log(format?: 'ms' | 'sec' | 'min' | 'hr') {
        switch (format) {
            case 'sec':
                console.log(`Operation time: ${this.seconds} sec`);
                return;
            case 'min':
                console.log(`Operation time: ${this.minutes} min`);
                return;
            case 'hr':
                console.log(`Operation time: ${this.hours} hr`);
                return;
            default:
                console.log(`Operation time: ${this.ms} ms`);
        }
    }

    /**
     * Converts execution time to a string
     */
    static toString(format?: 'ms' | 'sec' | 'min' | 'hr'): string {
        switch (format) {
            case 'sec':
                return String(this.seconds);
            case 'min':
                return String(this.minutes);
            case 'hr':
                return String(this.hours);
            default:
                return String(this.ms);
        }
    }

    /**
     * Execution time in seconds
     */
    static get seconds(): number {
        return this.ms / 1000;
    }

    /**
     * Execution time in minutes
     */
    static get minutes(): number {
        return this.ms / 60000;
    }

    /**
     * Execution time in hours
     */
    static get hours(): number {
        return this.ms / 3600000;
    }
}
