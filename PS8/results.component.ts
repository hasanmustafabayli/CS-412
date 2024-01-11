import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  template: `
    <div *ngIf="weatherData.length > 0; else noData">
      <div *ngFor="let data of weatherData">
        <h2>{{ data.location.name }}</h2>
        <p>Temperature: {{ data.current.temperature }}°C</p>
        <p>Weather: {{ data.current.weather_descriptions.join(', ') }}</p>
        <p>Wind Speed: {{ data.current.wind_speed }} km/h</p>
        <p>Humidity: {{ data.current.humidity }}%</p>
      </div>
    </div>
    <ng-template #noData>
      <p>No data available</p>
    </ng-template>
  `,
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() weatherData: any[] = [];
}

