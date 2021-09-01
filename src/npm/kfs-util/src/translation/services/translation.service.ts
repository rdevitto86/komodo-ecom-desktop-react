import { i18nService } from '../models/i18n-service.model';

/**
 * Facilitates in the translation of text during runtime
 */
export class TranslationService {
    private readonly DEFAULT_LANG = 'en';

    // TODO - use list/enum of supported languages
    // TODO props: httpService, rootPath, fileExt

    private language = this.DEFAULT_LANG;
    private url: string = '';

    private useLocalization: boolean = false;
    private localizationService: any = null;

    /**
     * @param {any} config TODO
     * @param {any} i18nConfig TODO
     */
    constructor(config: any, i18nConfig?: any) {
        // translation service config
        if (config) {
            if (config.language && config.language !== this.language) {
                this.language = config.language;
            }
            if (config.url) {
                this.url = config.url;
            }
        }
        // localization config
        if (i18nConfig) {
            if (
                i18nConfig.useLocalization === true &&
                i18nConfig.service instanceof i18nService
            ) {
                this.useLocalization = true;
                this.localizationService = i18nConfig.service;
            }
        }
    }

    /**
     * Translate text in one language to another
     */
    async translate(text: string, lang?: string) {}

    /**
     * Sets translate language
     */
    setLanguage(lang: string) {
        if (typeof lang === 'string') {
            this.language = lang;
        }
    }

    /**
     * Sets the translation language to default
     */
    setLanguageDefault() {
        this.language = this.DEFAULT_LANG;
    }
}
