/*import { Component } from '@angular/core';
import mockData from './mock-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  fetchData() {
    this.data = mockData;
  }
}*/

import { Component } from '@angular/core';
import mockData from './mock-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = mockData;

  fetchData() {
    console.log('Fetching data...');
  }
}

