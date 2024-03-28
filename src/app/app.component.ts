import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected to be an array
})
export class AppComponent {
  selectedCountryData: any;

  handleCountryInfo(countryData: any): void {
    this.selectedCountryData = countryData;
  }
}
