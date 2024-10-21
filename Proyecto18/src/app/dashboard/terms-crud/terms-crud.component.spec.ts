import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCrudComponent } from './terms-crud.component';

describe('TermsCrudComponent', () => {
  let component: TermsCrudComponent;
  let fixture: ComponentFixture<TermsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
