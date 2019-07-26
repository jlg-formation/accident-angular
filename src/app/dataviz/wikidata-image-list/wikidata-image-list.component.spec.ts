import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikidataImageListComponent } from './wikidata-image-list.component';

describe('WikidataImageListComponent', () => {
  let component: WikidataImageListComponent;
  let fixture: ComponentFixture<WikidataImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikidataImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikidataImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
