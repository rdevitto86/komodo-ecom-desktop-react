import { LoggerConfig } from './shared/types';
import { RuntimeLogger } from './runtime.logger';

/**
 * Singleton logger that records JavaScript runtime messages
 */
export class StandaloneLogger extends RuntimeLogger {
    private static instance: StandaloneLogger = null;

    private constructor(config?: LoggerConfig, name?: string) {
        super(config);
        StandaloneLogger.instance = this;

        if (typeof name === 'string') {
            this.name = name;
        }
    }

    static getInstance(config?: LoggerConfig, name?: string) {
        return !this.instance ? new this(config, name) : this.instance;
    }
}
