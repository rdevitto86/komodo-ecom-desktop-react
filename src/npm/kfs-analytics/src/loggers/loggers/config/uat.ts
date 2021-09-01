import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface UAT extends LoggerConfig {
    level: LogLevels.WARN;
    enableConsole: false;
    enableTrace: false;
    formatJSON: true;
}
