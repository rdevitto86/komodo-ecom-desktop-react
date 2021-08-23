import {
    CatalogServiceItemJSON,
    isService,
} from '../../npm/kfs-api/src/catalog-api/schemas/catalog-service-item';
import CatalogItem from '../catalog-item/catalog-item.model';
import CatalogProduct from '../catalog-product/product-item.model';

/**
 * A schedulable, catalog service.
 * @extends {CatalogItem}
 */
export default class CatalogService extends CatalogItem {
    products: CatalogProduct[] = [];

    serviceDate: Date | string = null;
    estimateMinutes: number = null;
    estimateHours: number = null;
    estimateDays: number = null;

    /**
     * @param {CatalogService | CatalogServiceItemJSON} [props] service details
     */
    constructor(props?: CatalogService | CatalogServiceItemJSON) {
        super(props);

        if (isService(props)) {
            Object.assign(this, props);
        }
    }
}
