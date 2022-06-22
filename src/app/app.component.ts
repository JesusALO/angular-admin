import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAdmin';
  title1 = 'Big Nuts';


  create = () => {
    console.log('create');
  }

   public showSidebar = 1;
   public showNavbar = 1;
}


