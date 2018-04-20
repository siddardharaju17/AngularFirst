import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`<h1>{{PageTitle}}</h1>
            <div>This is my First Component</div>`
})
export class AppComponent{
  PageTitle : String = 'Acme Product Management';
}
