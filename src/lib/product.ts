import productsRaw from "../data/products.json";

/**
 * @interface ProductData
 * @description Interface that defines the structure of the raw product data as it comes from the JSON file.
 * For type safety when creating instances of the Product class.
 */
export interface ProductData {
  id: number;
  title: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

/**
 * @class Product
 * @description Class that represents a product in the catalog.
 * It includes methods to format the price, get the slug, and check stock availability.
 */
export class Product {
  public readonly id: number;
  public readonly title: string;
  public readonly slug: string;
  private _price: number;
  public readonly category: string;
  public readonly image: string;
  public readonly description: string;
  public readonly inStock: boolean;

  constructor(data: ProductData) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.price = data.price;
    this.category = data.category;
    this.image = data.image;
    this.description = data.description;
    this.inStock = data.inStock;
  }

  /**
   * @method price
   * @description Getter for the price property. It allows us to access the price of the product
   * while keeping the actual property private.
   * @returns {number} The price of the product.
   */
  public get price(): number {
    return this._price;
  }

  /**
   * @method price
   * @description Setter for the price property.
   * It allows us to set the price of the product while keeping the actual property private.
   * @param {number} value - The new price to set for the product.
   */
  public set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative.");
    }
    this._price = value;
  }

  /**
   * @method getFormattedPrice
   * @description Returns the price formatted as a currency string (e.g., "$100.00").
   * @returns {string} The formatted price string.
   */
  public getFormattedPrice(): string {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(this.price);
  }

  /**
   * @method getSlug
   * @description Returns the slug of the product, which is used for URL routing in detail pages.
   * @return {string} The slug string.
   */
  public getSlug(): string {
    return this.slug;
  }

  /**
   * @method isInStock
   * @description Returns a boolean indicating whether the product is in stock or not.
   * @returns {boolean} True if the product is in stock, false otherwise.
   */
  public isInStock(): boolean {
    return this.inStock;
  }
}

/**
 * @class ProductCatalog
 * @description Class that manages the collection of products. It loads the raw product data from the JSON file,
 * transforms it into instances of the Product class, and provides methods to retrieve products by various criteria.
 */
export class ProductCatalog {
  private products: Product[];

  constructor() {
    this.products = (productsRaw as ProductData[]).map(
      (item: ProductData) => new Product(item),
    );
  }

  /**
   * @method getAllProducts
   * @description Returns an array of all products in the catalog as instances of the Product class.
   * @return {Product[]} An array of Product instances representing all products in the catalog.
   */
  public getAllProducts(): Product[] {
    return this.products;
  }

  /**
   * @method getProductBySlug
   * @description Returns a single product that matches the given slug. This is useful for detail pages
   * where we need to find a product based on its URL slug.
   * @param {string} slug - The slug string to search for.
   * @returns {Product | undefined} The Product instance that matches the slug, or undefined if no match is found.
   */
  public getProductBySlug(slug: string): Product | undefined {
    return this.products.find((p: Product) => p.getSlug() === slug);
  }

  /**
   * @method getProductsByCategory
   * @description Returns an array of products that belong to the specified category.
   * This allows us to filter products based on their category for category pages or filtering functionality.
   * @param {string} category - The category string to filter products by.
   * @return {Product[]} An array of Product instances that belong to the specified category. If no products match, an empty array is returned.
   */
  public getProductsByCategory(category: string): Product[] {
    return this.products.filter(
      (p: Product) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }
}
