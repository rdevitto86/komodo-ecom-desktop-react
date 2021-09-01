import { CachingService, LoggerConfig } from './shared/types';
import { LogLevels } from './shared/levels';
import { Priorities } from './shared/priorities';
import { RemoteLoggingService } from './services/remote-logging.service';
import { PersistantLogService } from './services/persistant-log.service';

/**
 * Logger that records messages to console and/or remote service
 */
export class RuntimeLogger {
    protected name: string = 'Logger';
    protected level: LogLevels = LogLevels.OFF;
    protected enableConsole: boolean = false;
    protected enableRemote: boolean = false;
    protected enableCaching: boolean = false;
    protected enableTimestamps: boolean = false;
    protected enableTrace: boolean = false;
    protected formatJSON: boolean = false;

    private remoteLoggingService: RemoteLoggingService = null;
    private cache: CachingService = null;

    constructor(params?: LoggerConfig) {
        if (params && typeof params === 'object') {
            Object.assign(this, params);

            if (params.enableRemote === true && params.remoteUrl) {
                if (params.enableCaching === true) {
                    this.cache =
                        params.persistLogs === true
                            ? new PersistantLogService()
                            : new Map();
                }

                this.remoteLoggingService = new RemoteLoggingService(
                    params.remoteUrl.toString(),
                );
            }
        }
    }

    fatal(message: string, metadata?: any): void {
        if (Priorities.FATAL <= Priorities[this.level]) {
            return;
        }

        const log = JSON.stringify(
            {
                level: LogLevels.FATAL,
                timestamp: this.enableTimestamps ? new Date().toISOString() : null,
                message,
                event: metadata,
            },
            null,
            this.formatJSON ? 2 : null,
        );

        if (this.enableConsole === true) {
            console.error(log);
        }
        if (this.enableRemote === true) {
            this.remoteLoggingService.send(log, this.cache);
        }
    }

    error(message: string, metadata?: any): void {
        if (Priorities.ERROR <= Priorities[this.level]) {
            return;
        }

        const log = JSON.stringify(
            {
                level: LogLevels.ERROR,
                timestamp: this.enableTimestamps ? new Date().toISOString() : null,
                message,
                event: metadata,
            },
            null,
            this.formatJSON ? 2 : null,
        );

        if (this.enableConsole === true) {
            console.error(log);
        }
        if (this.enableRemote === true) {
            this.remoteLoggingService.send(log, this.cache);
        }
    }

    warn(message: string, metadata?: any): void {
        if (Priorities.WARN <= Priorities[this.level]) {
            return;
        }

        const log = JSON.stringify(
            {
                level: LogLevels.WARN,
                timestamp: this.enableTimestamps ? new Date().toISOString() : null,
                message,
                event: metadata,
            },
            null,
            this.formatJSON ? 2 : null,
        );

        if (this.enableConsole === true) {
            console.warn(log);
        }
        if (this.enableRemote === true) {
            this.remoteLoggingService.send(log);
        }
    }

    info(message: string, metadata?: any): void {
        if (Priorities.INFO <= Priorities[this.level]) {
            return;
        }

        const log = JSON.stringify(
            {
                level: LogLevels.INFO,
                timestamp: this.enableTimestamps ? new Date().toISOString() : null,
                message,
                event: metadata,
            },
            null,
            this.formatJSON ? 2 : null,
        );

        if (this.enableConsole === true) {
            console.log(log);
        }
        if (this.enableRemote === true) {
            this.remoteLoggingService.send(log);
        }
    }

    debug(message: string, metadata?: any): void {
        if (Priorities.DEBUG <= Priorities[this.level]) {
            return;
        }

        const log = {
            level: LogLevels.DEBUG,
            timestamp: this.enableTimestamps ? new Date().toISOString() : null,
            message,
            event: metadata,
        };

        if (this.enableConsole === true) {
            console.dir(log);

            if (this.enableTrace === true) {
                console.trace();
            }
        }
        if (this.enableRemote === true) {
            this.remoteLoggingService.send(
                JSON.stringify(log, null, this.formatJSON ? 2 : null),
            );
        }
    }

    trace(): void {
        if (this.enableTrace && Priorities.TRACE <= Priorities[this.level]) {
            console.trace();
        }
    }
}
