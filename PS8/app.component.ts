import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { MOCK_DATA } from '../assets/mock-data';

@Component({
  selector: 'app-root',
  template: `
    <app-search (searchEvent)="performSearch($event)"></app-search>
    <app-results *ngIf="dataAvailable" [weatherData]="weatherData"></app-results>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataAvailable = false;
  weatherData: any[] = [];

  performSearch(searchTerm: string) {
    this.weatherData = MOCK_DATA.filter(item =>
      item.location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.dataAvailable = true;
  }
}

