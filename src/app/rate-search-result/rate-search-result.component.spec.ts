import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSearchResultComponent } from './rate-search-result.component';

describe('RateSearchResultComponent', () => {
  let component: RateSearchResultComponent;
  let fixture: ComponentFixture<RateSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
