import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-world-information',
  templateUrl: './world-information.component.html',
  styleUrls: ['./world-information.component.scss']
})
export class WorldInformationComponent  {
  @Input() countryData?: any; 

  // Individually  properties 
  @Input() selectedCountryName?: string;
  @Input() selectedCapitalCity?: string;
  @Input() selectedPopulation?: string;
  @Input() selectedCurrency?: string;
  @Input() selectedContinent?: string;
  @Input() selectedArea?: string;
}
