import { LogLevels } from './levels';
import { PersistantLogService } from '../services/persistant-log.service';

export interface LoggerConfig {
    level: LogLevels;
    enableConsole?: boolean;
    enableRemote?: boolean;
    remoteUrl?: URL | string;
    enableTimestamp?: boolean;
    enableTrace?: boolean;
    enableCaching?: boolean;
    persistLogs?: boolean;
    formatJSON?: boolean;
}

export type CachingService = Map<any, any> | PersistantLogService;
