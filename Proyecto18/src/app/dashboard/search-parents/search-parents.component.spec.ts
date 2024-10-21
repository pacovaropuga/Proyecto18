import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParentsComponent } from './search-parents.component';

describe('SearchParentsComponent', () => {
  let component: SearchParentsComponent;
  let fixture: ComponentFixture<SearchParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchParentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
