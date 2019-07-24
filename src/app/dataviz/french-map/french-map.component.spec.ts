import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchMapComponent } from './french-map.component';

describe('FrenchMapComponent', () => {
  let component: FrenchMapComponent;
  let fixture: ComponentFixture<FrenchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
