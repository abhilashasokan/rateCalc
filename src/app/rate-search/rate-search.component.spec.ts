import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSearchComponent } from './rate-search.component';

describe('RateSearchComponent', () => {
  let component: RateSearchComponent;
  let fixture: ComponentFixture<RateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
