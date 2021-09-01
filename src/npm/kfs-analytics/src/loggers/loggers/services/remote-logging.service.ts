import { CachingService } from '../shared/types';
import { PersistantLogService } from './persistant-log.service';

/**
 * Sends log messages to remote streaming endpoint
 */
export class RemoteLoggingService {
    constructor(private url: string) {}

    async send(body: any, cache?: CachingService): Promise<any> {
        await fetch(this.url, {
            headers: null,
            body,
        }).catch((e) => {
            if (cache) {
                if (cache instanceof Map) {
                    const date = new Date().toISOString();
                    cache.set(date, body);
                    cache.set(date, e);
                } else if (cache instanceof PersistantLogService) {
                    // TODO
                }
            }
        });
    }
}
