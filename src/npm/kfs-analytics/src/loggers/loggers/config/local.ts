import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface LOCAL extends LoggerConfig {
    level: LogLevels.TRACE;
    formatJSON: true;
}
