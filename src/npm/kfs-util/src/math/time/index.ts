type TimeUnit = number | string;

export interface Calculations {
    toMillseconds: Function;
    toSeconds: Function;
    toMinutes: Function;
    toHours: Function;
    toDays: Function;
    toWeeks: Function;
    toMonths: Function;
    toYears: Function;
}

/**
 * Facilitates conversion of one time units into other time units
 */
export default class Time {
    /**
     * Converts milliseconds into other time units
     * @static
     * @param {TimeUnit} milliseconds number of milliseconds
     * @returns {Calculations} time conversions
     * @example Time.convertMS(60000).toSec() => 60
     */
    static convertMS(milliseconds: TimeUnit): Calculations {
        const seconds = this.toNumber(milliseconds) / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const weeks = days / 7;
        const months = weeks / 4;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts seconds into other time units
     * @static
     * @param {TimeUnit} seconds number of seconds
     * @returns {Calculations} time conversions
     * @example Time.convertSeconds(3600).toHour() => 1
     */
    static convertSeconds(seconds: TimeUnit): Calculations {
        seconds = this.toNumber(seconds);

        const milliseconds = seconds * 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        const weeks = days / 7;
        const months = weeks / 4;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts minutes into other time units
     * @static
     * @param {TimeUnit} minutes number of minutes
     * @returns {Calculations} time conversions
     * @example Time.convertMinutes(5).toSec() => 300
     */
    static convertMinutes(minutes: TimeUnit): Calculations {
        minutes = this.toNumber(minutes);

        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
        const hours = minutes * 60;
        const days = hours / 24;
        const weeks = days / 7;
        const months = weeks / 4;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts hours into other time units
     * @static
     * @param {TimeUnit} hours number of hours
     * @returns {Calculations} time conversions
     * @example Time.convertHours(12).toDays() => 0.5
     */
    static convertHours(hours: TimeUnit): Calculations {
        hours = this.toNumber(hours);

        const minutes = hours * 60;
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
        const days = hours / 24;
        const weeks = days / 7;
        const months = weeks / 4;
        const years = weeks / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts days into other time units
     * @static
     * @param {TimeUnit} days number of days
     * @returns {Calculations} time conversions
     * @example Time.convertDays(365).toYears() => 1
     */
    static convertDays(days: TimeUnit): Calculations {
        days = this.toNumber(days);

        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
        const weeks = days / 7;
        const months = weeks / 4;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts weeks into other time units
     * @static
     * @param {TimeUnit} days number of weeks
     * @returns {Calculations} time conversions
     * @example Time.convertWeeks(1).toDays() => 7
     */
    static convertWeeks(weeks: TimeUnit): Calculations {
        weeks = this.toNumber(weeks);

        const days = weeks * 7;
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
        const months = weeks / 4;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts months into other time units
     * @static
     * @param {TimeUnit} days number of months
     * @returns {Calculations} time conversions
     * @example Time.convertMonths(12).toWeeks() => 52.1429
     */
     static convertMonths(months: TimeUnit): Calculations {
        months = this.toNumber(months);

        const weeks = months * 4;
        const days = weeks * 7;
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
        const years = months / 12;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }
    
    /**
     * Converts months into other time units
     * @static
     * @param {TimeUnit} days number of months
     * @returns {Calculations} time conversions
     * @example Time.convertMonths(12).toWeeks() => 52.1429
     */
     static convertYears(years: TimeUnit): Calculations {
        years = this.toNumber(years);

        const months = years * 12;
        const weeks = months * 4;
        const days = weeks * 7;
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        const milliseconds = seconds * 1000;
    
        return {
            toMillseconds: () => milliseconds,
            toSeconds: () => seconds,
            toMinutes: () => minutes,
            toHours: () => hours,
            toDays: () => days,
            toWeeks: () => weeks,
            toMonths: () => months,
            toYears: () => years,
        };
    }

    /**
     * Converts data types to numbers
     */
    private static toNumber(input: TimeUnit): number {
        if (typeof input !== 'number') {
            if (typeof input !== 'string') {
                return -1;
            }
            input = Number.parseFloat(input);
        }
        return (!Number.isNaN(input)) ? input : -1;
    }
}
