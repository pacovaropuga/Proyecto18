import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTranslationComponent } from './search-translation.component';

describe('SearchTranslationComponent', () => {
  let component: SearchTranslationComponent;
  let fixture: ComponentFixture<SearchTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTranslationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
