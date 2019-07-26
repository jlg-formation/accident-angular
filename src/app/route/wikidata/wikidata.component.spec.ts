import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikidataComponent } from './wikidata.component';

describe('WikidataComponent', () => {
  let component: WikidataComponent;
  let fixture: ComponentFixture<WikidataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikidataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
