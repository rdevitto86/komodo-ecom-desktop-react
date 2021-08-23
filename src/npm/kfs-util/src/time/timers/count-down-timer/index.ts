/**
 * A timer that counts down to zero in 1 second intervals
 */
export default class CountDownTimer {
    /**
     * Number of milliseconds remaining
     */
    remaining: number = 0;

    /**
     * Timer activity flag
     */
    isRunning: boolean = false;

    /**
     * Browser 
     */
    private timer: number | null = null;

    /**
     * Limits timer to 7 days
     * @private
     * @readonly
     */
    readonly TIMER_CAP = 604800000;

    /**
     * @param {number} [ms] number of milliseconds
     * @param {number} [sec] number of seconds
     * @param {number} [min] number of minutes
     * @param {number} [hr] number of hours
     */
    constructor(ms?: number, sec?: number, min?: number, hr?: number) {
        this.addMilliseconds(ms);
        this.addSeconds(sec);
        this.addMinutes(min);
        this.addHours(hr);
    }

    /**
     * Creates and/or starts counting down
     */
    start() {
        if (this.remaining <= 0) {
            return;
        }

        this.isRunning = true;

        // start new timer and begin recording
        this.timer = window.setInterval(() => {
            if (!this.remaining--) {
                this.stop();
            }
        }, 1000);
    }

    /**
     * Stops the timer
     */
    stop() {
        if (this.timer) {
            this.isRunning = false;
            window.clearInterval(this.timer);
            this.timer = null;
        }
    }

    /**
     * Return to default timer settings
     */
    reset() {
        this.stop();
        this.remaining = 0;
    }

    /**
     * Adds milliseconds to timer
     * @param {number} ms number of milliseconds
     */
    addMilliseconds(ms: number) {
        if (typeof ms === 'number' && ms > 0) {
            this.remaining += ms;
        }
    }

    /**
     * Adds seconds to timer
     * @param {number} sec number of seconds
     */
    addSeconds(sec: number) {
        if (typeof sec === 'number' && sec > 0) {
            this.remaining += sec * 1000;
        }
    }

    /**
     * Adds minutes to timer
     * @param {number} min number of minutes
     */
    addMinutes(min: number) {
        if (typeof min === 'number' && min > 0) {
            this.remaining += min * 60000;
        }
    }

    /**
     * Adds hours to timer
     * @param {number} hours number of hours
     */
    addHours(hours: number) {
        if (typeof hours === 'number' && hours > 0) {
            this.remaining += hours * 3600000;
        }
    }

    /**
     * Adds 30 seconds to timer
     */
    add30Seconds() {
        this.remaining += 30000;
    }

    /**
     * Adds 1 minute to timer
     */
    add1Minute() {
        this.remaining += 60000;
    }

    /**
     * Adds 5 minutes to timer
     */
    add5Minutes() {
        this.remaining += 300000;
    }

    /**
     * Adds 30 minutes to timer
     */
    add30Minutes() {
        this.remaining += 1800000;
    }
}
