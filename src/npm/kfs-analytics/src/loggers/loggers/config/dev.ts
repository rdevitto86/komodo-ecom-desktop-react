import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface DEV extends LoggerConfig {
    level: LogLevels.DEBUG;
    formatJSON: true;
}
