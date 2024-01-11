import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <label for="searchTerm">Search Term:</label>
      <input
        type="text"
        id="searchTerm"
        [formControl]="searchTermControl"
        placeholder="Enter search term"
      />
      <button (click)="onSearch()">Search</button>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchTermControl = new FormControl('', [Validators.required, Validators.minLength(2)]);

  onSearch() {
    if (this.searchTermControl.valid) {
      this.searchEvent.emit(this.searchTermControl.value!);
    }
  }
}
