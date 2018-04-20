import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                'ProductId': 2,
                'ProductName': 'Garden Cart',
                'ProductCode': 'GDN-0023',
                'ReleaseDate': 'April 1 2018',
                'Description': '15 Gallon capacity cart',
                'Price': 45.67,
                'StarRating': 3,
                'ImageUrl': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg'
            },
            {
                'ProductId': 3,
                'ProductName': 'Hammer',
                'ProductCode': 'GDN-0025',
                'ReleaseDate': 'April 21 2018',
                'Description': 'Iron hammer',
                'Price': 21.67,
                'StarRating': 4.5,
                'ImageUrl': 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg'
            }
        ];
    }


}
