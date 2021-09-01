import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface PERF extends LoggerConfig {
    level: LogLevels.ERROR;
    enableConsole: false;
    enableRemote: true;
    enableTimestamp: true;
    enableTrace: false;
    enableCaching: true;
    persistLogs: true;
    formatJSON: true;
}
