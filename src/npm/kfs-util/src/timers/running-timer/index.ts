/**
 * Time instance object
 */
let _timer: number | null = null;

/**
 * A running timer to track time durations
 */
export default class RunningTimer {
    /**
     * Number of milliseconds past
     */
    milliseconds: number = 0;

    /**
     * Denotes if the timer is currently running
     */
    isRunning: boolean = false;

    /**
     * 
     */
    start() {
        this.isRunning = true;

        // TODO - worker thread that has interval timer
    }

    /**
     * Stops the timer
     */
    stop() {
        if (_timer) {
            window.clearInterval(_timer);
            _timer = null;
            this.milliseconds = 0;
            this.isRunning = false;
        }
    }

    /**
     * Prints the time elapsed since start
     */
    print() {
        // TODO - convert to days, hours, mins, and secs
        return this.milliseconds;
    }
}
