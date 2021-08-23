import Timer from '../timer';
import CountDownTimer from '../count-down-timer';

export interface Params {
    event: Function;
    useCountdown: boolean;
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}

/**
 * Emits an event after a timer has completed
 */
export default class Alarm {
    /**
     * Browser time recorder
     */
    private timer: Timer | CountDownTimer;

    /**
     * Event emitted after timer completes
     */
    private event: Function;

    /**
     * @param {Params} params alarm configuration
     */
    constructor(params: Params) {
        if (params) {
            const { 
                event, 
                useCountdown,
                milliseconds,
                seconds,
                minutes,
                hours,
                // days,
            } = params;

            if (
                typeof useCountdown === 'boolean'
                && event instanceof Function
            ) {
                this.event = event;

                this.timer = (useCountdown) 
                    ? new CountDownTimer(
                        milliseconds,
                        seconds,
                        minutes,
                        hours,
                    )
                    : new Timer(
                        milliseconds,
                        seconds,
                        minutes,
                        hours,
                    );
            }
        }
    }
}
