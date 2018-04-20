import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  PageTitle: String = 'Acme Product Management';
}
