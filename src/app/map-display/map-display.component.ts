import { Component, AfterViewInit } from '@angular/core'; // Added AfterViewInit
import { GeoDataService } from '../geo-data.service';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements AfterViewInit { // Implement AfterViewInit
  constructor(private geoDataService: GeoDataService) { }

  ngAfterViewInit(): void {
    // Assuming your SVG is directly in the template. Adjust the selector if needed.
    const svgElement = document.querySelector('svg') as SVGElement;
    const pathElements: NodeListOf<SVGPathElement> = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener('click', (event: MouseEvent) => this.handleClick(event));
    });
  }

  handleClick(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryCode = path.id; // Assuming the SVG path id is the country code

    // Use the GeoDataService to fetch country information
    this.geoDataService.getCountryInformation(countryCode).subscribe((data: any) => {
      console.log(data); // For now, just log the data to see if it works
    });
  }

  // Your existing onMapClick method, if still needed
  onMapClick(event: MouseEvent): void {
    console.log("Map clicked", event);
  }
}
 