export interface IProduct {
    ProductId: Number;
    ProductName: String;
    ProductCode: String;
    ReleaseDate: String;
    Price: number;
    Description: String;
    StarRating: number;
    ImageUrl: String;
}

export class Product implements IProduct {
    constructor(public ProductId: Number,
       public ProductName: String,
       public ProductCode: String,
       public ReleaseDate: String,
       public Price: number,
       public Description: String,
       public StarRating: number,
       public ImageUrl: String) {

    }

    calculateDiscount(percent: number): number {
        return this.Price - (this.Price * percent / 100);
    }
}
