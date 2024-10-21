import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantsCrudComponent } from './variants-crud.component';

describe('VariantsCrudComponent', () => {
  let component: VariantsCrudComponent;
  let fixture: ComponentFixture<VariantsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
