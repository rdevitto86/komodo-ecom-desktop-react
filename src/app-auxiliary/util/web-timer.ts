/**
 * @class
 * @version 1.0
 * @description creates a stopwatch timer to track time durations
 */
export default class WebTimer {
    /**
     * @public
     * @readonly
     * @property {Number} DEFAULT_TIMEOUT
     * @description default timeout in milliseconds
     */
    public readonly DEFAULT_TIMEOUT = 1000;

    /**
     * @public
     * @property {String} current
     * @description shows the current running time
     */
    public current: string = '00:00:00';

    /**
     * @public
     * @property {Number} milliseconds
     * @description number of milliseconds past
     */
    public milliseconds: number = 0;

    /**
     * @public
     * @property {Boolean} isRunning
     * @description shows if the timer is currently running
     */
    public isRunning: boolean = false;

    /**
     * @public
     * @property {String | Undefined} startTime
     * @description timer start
     */
    public startTime: string | undefined = undefined;

    /**
     * @public
     * @property {String | Undefined} endTime
     * @description timer end
     */
    public endTime: string | undefined = undefined;

    /**
     * @public
     * @property {String[]} history
     * @description lap history
     */
    public history: String[] = [];

    /**
     * @private
     * @property {TimeHandler | Null} _timer
     * @description timer object
     */
    private _timer: number | null = null;

    /**
     * @public
     * @function WebTimer.start
     * @description starts the timer
     * @param {Number} [timeout] custom timeout variable
     * @see setInterval
     */
    start(timeout?: number) {
        // validate the timeout variable
        if (typeof timeout !== 'number' || timeout <= 0) {
            timeout = this.DEFAULT_TIMEOUT;
        }

        this.startTime = (new Date()).toDateString();

        // start new timer and begin recording (timeout of 1000ms)
        this._timer = window.setInterval(() => {
            this.milliseconds++;

            let remain = this.milliseconds;

            let hours: number | string = Math.floor(remain / 3600);
            remain -= hours * 3600;

            let mins: number | string = Math.floor(remain / 60);
            remain -= mins * 60;

            let secs: number | string = remain;

            if (hours < 10) {
                hours = `0${hours}`;
            }
            if (mins < 10) {
                mins = `0${mins}`;
            }
            if (secs < 10) {
                secs = `0${secs}`;
            }

            this.current = `${hours}:${mins}:${secs}`;
        }, timeout);

        // set runtime variables
        this.isRunning = true;
        this.endTime = undefined;
    }

    /**
     * @public
     * @function WebTimer.stop
     * @description ends the timer
     * @see clearInterval
     */
    stop() {
        if (this._timer) {
            this.endTime = new Date().toDateString();
            window.clearInterval(this._timer);
            this._timer = null;
            this.isRunning = false;
        }
    }

    /**
     * @public
     * @function WebTimer.lap
     * @description adds a recorded time (lap)
     */
    lap() {
        const { history, current } = this;
        history.push(current);
    }

    /**
     * @public
     * @function WebTimer.reset
     * @description resets the timer to default state
     */
    reset() {
        // remove timer (if not stopped)
        this.stop();

        // reset locals
        this.milliseconds = 0;
        this.current = '00:00:00';
        this.startTime = undefined;
        this.history = [];
    }

    /**
     * @public
     * @readonly
     * @property {Number} seconds
     * @description total time elapsed in seconds
     */
    get seconds() {
        const { current } = this;
        const results = Number(current.substring(current.length - 2, current.length));
        return (!Number.isNaN(results)) ? results : -1;
    }

    /**
     * @public
     * @readonly
     * @property {Number} minutes
     * @description total time elapsed in minutes
     */
    get minutes() {
        const { current } = this;
        const startIndex = current.indexOf(':');
        const results = Number(current.substring(startIndex + 1, startIndex + 3));
        return (!Number.isNaN(results)) ? results : -1;
    }

    /**
     * @public
     * @readonly
     * @property {Number} hours
     * @description total time elapsed in hours
     */
    get hours() {
        const results = Number(this.current.substring(0, 2));
        return (!Number.isNaN(results)) ? results : -1;
    }
}