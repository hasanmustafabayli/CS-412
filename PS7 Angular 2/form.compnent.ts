import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {
    @Output() weatherData = new EventEmitter<any>();

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            cities: ['', Validators.required]
        })
    }
    ngOnInit(): void {

    }
    onSubmit(): void {
        if (this.form.valid) {
            const cities = (this.form.value.cities as string).split(',').map(city => city.trim());
            this.weatherData.emit(cities);
        }
    }

}