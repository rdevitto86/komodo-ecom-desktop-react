import { CatalogProductItemJSON } from '../catalog-product-item';
import { CatalogServiceItemJSON } from '../catalog-service-item';

export type CatalogItem = CatalogProductItemJSON | CatalogServiceItemJSON;

/**
 * Defines an abstract Catalog Item object
 */
export interface CatalogItemJSON {
    catalogID: string;
    categoryID?: string;
    classifcation: string;
    price: number;
    tags?: string[];
    title: string;
    description: string;
    enablePromotions?: boolean;
}

/**
 * Checks if an item is an CatalogItem type object
 * @param {any} obj object to reference
 * @returns {boolean} true/false
 */
export function isCatalogItem(obj: any): obj is CatalogItemJSON {
    return (
        'catalogID' in obj &&
        'classifcation' in obj &&
        'title' in obj &&
        'description' in obj &&
        'enablePromotions' in obj
    );
}
