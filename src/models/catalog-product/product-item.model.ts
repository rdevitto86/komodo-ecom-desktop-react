import {
    isProduct,
    CatalogProductItemJSON,
} from '../../npm/kfs-api/src/catalog-api/schemas/catalog-product-item';
import CatalogItem from '../catalog-item/catalog-item.model';

/**
 * An orderable, catalog product
 * @extends {CatalogItem}
 */
export default class CatalogProduct extends CatalogItem {
    sku: string = null;
    quantity: number = null;
    stock: number = null;
    features: string = null;
    specifications: any = null;
    rating: number = null;

    enableRatings: boolean = false;
    enableReviews: boolean = false;

    imageURL: string = null;
    videoURL: string = null;

    /**
     * @param {CatalogProduct | CatalogProductItemJSON} [props] product details
     */
    constructor(props?: CatalogProduct | CatalogProductItemJSON) {
        super(props);

        if (isProduct(props)) {
            Object.assign(this, props);
        }
    }
}
