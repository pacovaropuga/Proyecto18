import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVariantComponent } from './search-variant.component';

describe('SearchVariantComponent', () => {
  let component: SearchVariantComponent;
  let fixture: ComponentFixture<SearchVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchVariantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
