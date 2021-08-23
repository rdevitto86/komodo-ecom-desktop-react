/**
 * A running timer that records elapsed time
 */
export default class Timer {
    /**
     * Number of milliseconds recorded
     */
    elpased: number = 0;

    /**
     * Timer activity flag
     */
    isRunning: boolean = false;

    /**
     * Time instance object
     * @private
     */
    private timer: number | null = null;

    /**
     * Specified timer limit
     * @private
     */
    private limit: number = 0;

    /**
     * Limits timer to 1 day
     * @private
     * @readonly
     */
    private readonly MAX_LIMIT = 86400000;

    /**
     * @param {number} [ms] number of milliseconds
     * @param {number} [sec] number of seconds
     * @param {number} [min] number of minutes
     * @param {number} [hr] number of hours
     */
     constructor(ms?: number, sec?: number, min?: number, hr?: number) {
        let limit = 0;

        if (typeof ms === 'number' && ms > 0) {
            limit += ms;
        }
        if (typeof sec === 'number' && sec > 0) {
            limit += sec * 1000;
        }
        if (typeof min === 'number' && min > 0) {
            limit = min * 60000;
        }
        if (typeof hr === 'number' && hr > 0) {
            limit = hr * 3600000;
        }

        if (limit <= 0) return;
        
        if (limit > this.MAX_LIMIT) {
            limit = this.MAX_LIMIT;
        }

        this.limit = limit;
    }

    /**
     * Creates and/or starts recording time past
     */
    start() {
        this.isRunning = true;
        const { limit: timerlimit } = this;

        // start new timer and begin recording
        this.timer = window.setInterval(() => {
            if (++this.elpased <= timerlimit) {
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
            window.clearInterval(this.timer); // fully clears from memory
            this.timer = null;
        }
    }

    /**
     * Return to default timer settings
     */
    reset() {
        this.stop();
        this.elpased = 0;
    }

    /**
     * Standardized running time
     * @example '01:19:56'
     */
    get current(): string {
        const seconds = this.elpased / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;

        // TODO - handle overflow numbers 
        // (ex only 1.5min = 1min + 30sec and not 90sec)

        return `${hours}:${minutes}:${seconds}`;
    }

    /**
     * Number of seconds recorded
     */
    get seconds(): number {
        return this.elpased / 1000;
    }

    /**
     * Number of minutes recorded
     */
    get minutes(): number {
        return this.elpased / 60000;
    }

    /**
     * Number of hours recorded
     */
    get hours(): number {
        return this.elpased / 3600000;
    }
}
