import Timer from '../timer';

/**
 * A stop/start timer with history
 */
export default class Stopwatch {
    /**
     * Timestamp of start time
     */
    startTime: string;

    /**
     * Timestamp of end time
     */
    endTime: string;

    /**
     * Lap history
     */
    history: string[] = [];

    /**
     * Timer object
     */
    private timer: Timer;

    /**
     * Starts the timer
     */
    start() {
        this.endTime = null;
        this.startTime = new Date().toDateString();
        this.timer.start();
    }

    /**
     * Stops the timer
     */
    stop() {
        if (this.timer) {
            this.timer.stop();
            this.endTime = new Date().toDateString();
        }
    }

    /**
     * Resets the timer to default state
     */
    reset() {
        if (this.timer) {
            this.timer.reset();
            this.timer = null;
        }
        this.startTime = null;
        this.endTime = null;
        this.history = [];
    }

    /**
     * Adds a timestamp to lap history
     */
    lap() {
        this.history.push(this.timer.current);
    }

    /**
     * Formatted running time
     */
    get current() {
        return (this.timer) ? this.timer.current : '00:00:00';
    }

    /**
     * Stopwatch activity flag
     */
    get isRunning() {
        return (this.timer) ? this.timer.isRunning : false;
    }
}
