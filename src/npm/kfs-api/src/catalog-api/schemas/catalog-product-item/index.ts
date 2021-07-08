import { CatalogItemJSON, isCatalogItem } from '../catalog-item';

/**
 * Defines an abstract Catalog Product object
 */
export interface CatalogProductItemJSON extends CatalogItemJSON {
    sku: string;
    quantity?: number;
    stock?: number;
    features?: string | null
    specifications: null;
    enableRatings?: boolean;
    rating?: number;
    enableReviews?: boolean;
    documentsURL?: string;
}

/**
 * Checks if an item is an Catalog Product type object
 * @param {any} obj object to reference
 * @returns {boolean} true/false
 */
export function isProduct(obj: any): obj is CatalogProductItemJSON {
    return isCatalogItem(obj) && 'sku' in obj && 'price' in obj;
}
