import { LogLevels } from '../shared/levels';
import { LoggerConfig } from '../shared/types';

export interface SIT extends LoggerConfig {
    level: LogLevels.DEBUG;
    enableTrace: false;
    formatJSON: true;
}
