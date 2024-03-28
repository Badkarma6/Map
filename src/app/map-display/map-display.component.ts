import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { GeoDataService } from '../geo-data.service';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements AfterViewInit {
  @Output() countryInfoEmitted = new EventEmitter<any>();

  // Define properties to hold selected country information
  selectedCountryName: string = '';
  selectedCapitalCity: string = '';
  selectedPopulation: string = '';
  selectedCurrency: string = '';
  selectedContinent: string = '';
  selectedArea: string = '';

  constructor(private geoDataService: GeoDataService) { }

  ngAfterViewInit(): void {
    const svgElement = document.querySelector('svg') as SVGElement;
    svgElement.querySelectorAll('path').forEach(path => {
      // Use mouseenter for hover functionality
      path.addEventListener('mouseenter', (event: MouseEvent) => this.handleMouseEnter(event));
      path.addEventListener('mouseleave', (event: MouseEvent) => this.handleMouseLeave(event));
    });
  }

  handleMouseEnter(event: MouseEvent): void {
    const path = event.target as SVGPathElement;
    const countryCode = path.id;

    // Change the country color on hover
    path.style.fill = 'rgb(245, 8, 8)'; // Highlight color

    // Fetch and emit country information on hover
    this.geoDataService.getCountryInformation(countryCode).subscribe((data: any) => {
      if (data.geonames && data.geonames.length > 0) {
        const countryInfo = data.geonames[0];
        // Set the properties with the retrieved data
        this.selectedCountryName = countryInfo.countryName;
        this.selectedCapitalCity = countryInfo.capital;
        this.selectedPopulation = countryInfo.population;
        this.selectedCurrency = countryInfo.currencyCode;
        this.selectedContinent = countryInfo.continentName;
        this.selectedArea = countryInfo.areaInSqKm;

        // Emit the updated country info
        this.countryInfoEmitted.emit({
          countryName: this.selectedCountryName,
          capitalCity: this.selectedCapitalCity,
          population: this.selectedPopulation,
          currency: this.selectedCurrency,
          continent: this.selectedContinent,
          area: this.selectedArea
        });
      }
    });
  }

  handleMouseLeave(event: MouseEvent): void {
    const path = event.target as SVGPathElement;
    // Reset the fill color upon mouse leave
    path.style.fill = ''; // Consider setting this to the original or default fill color
  }
}
