import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface PROD extends LoggerConfig {
    level: LogLevels.ERROR;
    enableConsole: false;
    enableTimestamp: true;
    enableTrace: false;
    formatJSON: true;
}
