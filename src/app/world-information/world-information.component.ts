import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-world-information',
  templateUrl: './world-information.component.html',
  styleUrls: ['./world-information.component.scss'] 
})
export class WorldInformationComponent {
  @Input() selectedCountryName?: string;
  @Input() selectedCountryIncome?: number;
  @Input() selectedCountryCapital?: string;
  @Input() selectedCountryGdp?: number;
  @Input() selectedCountryLifeExpectancy?: number;
  @Input() selectedCountryRegion?: string;

  constructor() { }
}
