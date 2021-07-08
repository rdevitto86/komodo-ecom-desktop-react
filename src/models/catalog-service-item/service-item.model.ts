import { isService, CatalogServiceItemJSON } from '../../npm/kfs-api/src/catalog-api/schemas/catalog-service-item';
import CatalogItem from '../catalog-item/catalog-item.model';
import CatalogProductItem from '../catalog-product-item/product-item.model';

/**
 * A schedulable, catalog service.
 * @extends {CatalogItem}
 */
export default class CatalogServiceItem extends CatalogItem {
    /**
     * List of products included in service
     */
    products: CatalogProductItem[] = [];

    /**
     * Date of service
     */
    serviceDate: Date | string | null = null;

    /**
     * Estimate on minutes required
     */
    estimateMinutes: number | null = null;

    /**
     * Estimate on hours required
     */
    estimateHours: number | null = null;

    /**
     * Estimate on days required
     */
    estimateDays: number | null = null;

    /**
     * Name of service technician
     */
    technicianName: string | null = null;

    /**
     * Cost of parts
     */
    partsCost: number | null = null;

    /**
     * Labor rate for technician and/or company
     */
    laborCost: number | null = null;

    /**
     * @param {CatalogServiceItem | CatalogServiceItemJSON} [props] service details
     */
    constructor(props?: CatalogServiceItem | CatalogServiceItemJSON) {
        super(props);

        if (isService(props)) {
            const {
                products,
                serviceDate,
                estimateMinutes,
                estimateHours,
                estimateDays,
                technicianName,
                partsCost,
                laborCost,
            } = props;

            this.partsCost = partsCost;
            this.laborCost = laborCost;

            // TODO - determine if total price should come from service or calculated dynamically
            // TODO - determine if partsCost is null, default to adding-up products in array

            // set service parts/products
            if (products instanceof Array && products.length > 0) {
                for (let i = 0, len = products.length; i < len; i++) {
                    this.products.push(new CatalogProductItem(products[i]));
                }
            }

            // set scheduled date
            if (serviceDate) {
                this.serviceDate = serviceDate;
            }

            // set estimated job time
            this.estimateMinutes = estimateMinutes;
            this.estimateHours = estimateHours;
            this.estimateDays = estimateDays;

            // set technician details
            if (technicianName) {
                this.technicianName = technicianName;
            }
        }
    }
}
