import { Component } from '@angular/core';

@Component({
  selector: 'app-map-display', // This is how you reference the component in HTML
  templateUrl: './map-display.component.html', // Path to the HTML template
  styleUrls: ['./map-display.component.scss'] // Corrected to be an array
})
export class MapDisplayComponent {
  // Add this method inside your component class
  onMapClick(event: MouseEvent): void {
    console.log("Map clicked", event);
  }
}

