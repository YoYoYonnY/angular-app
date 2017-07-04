import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My1337App.exe';
  links = [ { name: "Tour of Heroes", url: "https://angular.io/tutorial" }
          , { name: "CLI Documentation", url: "https://github.com/angular/angular-cli/wiki" }
          , { name: "Angular blog", url: "http://angularjs.blogspot.ca/" }
          , { name: "Find more resources", url: "https://www.google.com" }
          ]
}
