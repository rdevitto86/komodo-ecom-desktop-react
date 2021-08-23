export type i18nJSON = {
    [key: string]: string | number | Object;
};

export { KomodoDetails } from './terminology/internal/komodo-details';
export { KomodoTerms } from './terminology/internal/komodo-terms';

export * as Canada from './geography/ca';
export * as Mexico from './geography/mx';
export * as UnitedStates from './geography/us';

// TODO format JSON to match i18Next lib???
export { en } from './languages/en';
export { es } from './languages/es';
