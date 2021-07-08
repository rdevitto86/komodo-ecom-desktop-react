import { CatalogItemJSON, isCatalogItem } from '../catalog-item';
import { CatalogProductItemJSON } from '../catalog-product-item';

/**
 * Defines an abstract Catalog Service object
 */
export interface CatalogServiceItemJSON extends CatalogItemJSON {
    products: CatalogProductItemJSON[];
    serviceDate?: Date | string;
    estimateMinutes: number;
    estimateHours: number;
    estimateDays: number;
    technicianName?: string;
    partsCost: number,
    laborCost: number;
}

/**
 * Checks if an item is an Catalog Service type object
 * @param {any} obj object to reference
 * @returns {boolean} true/false
 */
export function isService(obj: any): obj is CatalogServiceItemJSON {
    return isCatalogItem(obj) 
        && 'products' in obj 
        && 'estimateMinutes' in obj
        && 'estimateHours' in obj
        && 'laborCost' in obj;
}
