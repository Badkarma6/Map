import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldInformationComponent } from './world-information.component';

describe('WorldInformationComponent', () => {
  let component: WorldInformationComponent;
  let fixture: ComponentFixture<WorldInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorldInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
