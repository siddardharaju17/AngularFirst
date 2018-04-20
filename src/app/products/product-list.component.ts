import {Component, OnInit} from '@angular/core';
import {IProduct, Product} from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
    PagesubTitle: String = 'Products List';
    ImageWidth: Number = 50;
    ImageMargin: Number = 2;
    ShowImage = false;

    _ListFilter: string;
    get ListFilter(): string {
        return this._ListFilter;
    }
    set ListFilter(value: string) {
        this._ListFilter = value;
        this.filterdProducts = this.ListFilter ? this.performFilter(this.ListFilter) : this.Products;
    }
    filterdProducts: IProduct[];
    Products: IProduct[] = [];
    constructor(private _productService: ProductService) {

    }
    performFilter(filterby: string): IProduct[] {
        filterby = filterby.toLocaleLowerCase();
        // tslint:disable-next-line:no-shadowed-variable
        return this.Products.filter((product: IProduct) => product.ProductName.toLocaleLowerCase().indexOf(filterby) !== -1);
    }

    toggleImage(): void {
        this.ShowImage = !this.ShowImage;
    }

    ngOnInit(): void {
        this.Products = this._productService.getProducts();
        this.filterdProducts = this.Products;
    }

}
