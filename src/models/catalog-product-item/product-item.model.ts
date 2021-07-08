import { isProduct, CatalogProductItemJSON } from '../../npm/kfs-api/src/catalog-api/schemas/catalog-product-item';
import CatalogItem from '../catalog-item/catalog-item.model';

/**
 * An orderable, catalog product
 * @extends {CatalogItem}
 */
export default class CatalogProductItem extends CatalogItem {
    /**
     * Item SKU number
     */
    sku: string | null = null;

    /**
     * Item quantity
     */
    quantity: number | null = null;

    /**
     * Item stock level
     */
    stock: number | null = null;

    /**
     * Item key features
     */
    features: string | null = null;

    /**
     * Item technical specifications
     */
    specifications: null = null;

    /**
     * Enables user ratings
     */
    enableRatings: boolean = false;

    /**
     * Aggregated user rating
     */
    rating: number | null = null;

    /**
     * Enables user reviews
     */
    enableReviews: boolean = false;

    /**
     * External link to support and documentation
     */
    documentsURL: string | null = null;

    /**
     * @param {CatalogProductItem | CatalogProductItemJSON} [props] product details
     */
    constructor(props?: CatalogProductItem | CatalogProductItemJSON) {
        super(props);

        if (isProduct(props)) {
            const {
                sku,
                quantity,
                stock,
                features,
                specifications,
                enableRatings,
                rating,
                enableReviews,
                documentsURL,
            } = props;

            // set product data
            this.sku = sku;

            if (quantity) {
                this.quantity = quantity;
            }
            if (stock) {
                this.stock = stock;
            }
            if (features) {
                this.features = features;
            }
            if (specifications) {
                this.specifications = specifications;
            }

            // set ratings data (if enabled)
            if (enableRatings === true) {
                this.enableRatings = true;

                if (typeof rating === 'number') {
                    this.rating = rating;
                }
            }

            // set review data (if enabled)
            if (enableReviews === true) {
                this.enableReviews = true;
            }

            // set support/documents url
            if (documentsURL) {
                this.documentsURL = documentsURL;
            }
        }
    }
}
