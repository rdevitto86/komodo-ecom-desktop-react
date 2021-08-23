import {
    CatalogItemJSON,
    isCatalogItem,
} from 'src/npm/kfs-api/src/catalog-api/schemas/catalog-item';

/**
 * Defines a new Catalog Item model
 */
export default class CatalogItem {
    catalogID: string = null;
    categoryID: string = null;
    classifcation: string = null;

    title: string = null;
    description: string = null;
    tags: string[] = [];

    price: number = null;

    enablePromotions: boolean = false;

    /**
     * @param {CatalogItemJSON | CatalogItem} [props] item details object
     */
    constructor(props?: CatalogItemJSON | CatalogItem) {
        if (isCatalogItem(props)) {
            Object.assign(this, props);
        }
    }
}
