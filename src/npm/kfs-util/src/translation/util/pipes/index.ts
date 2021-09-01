// import { TranslationService } from '../service/translation.service';

/**
 * Translates text once during runtime
 * @decorator
 */
export function TranslateOnce(
    text: string | string[],
    lang: string,
    subscriber?: Function,
    checkLocal?: boolean,
) {}

/**
 * Translates text automatically during runtime
 * @decorator
 */
export function TranslateAuto(
    text: string,
    lang: string,
    subscriber?: Function,
    checkLocal?: boolean,
) {}

/**
 * Translates text into English during runtime
 * @decorator
 */
export function ToEnglish(
    text: string | string[],
    subscriber?: Function,
    checkLocal?: boolean,
) {}

/**
 * Translates text into Spanish during runtime
 * @decorator
 */
export function ToSpanish(
    text: string | string[],
    subscriber?: Function,
    checkLocal?: boolean,
) {}
