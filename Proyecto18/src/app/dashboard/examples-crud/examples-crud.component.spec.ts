import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesCrudComponent } from './examples-crud.component';

describe('ExamplesCrudComponent', () => {
  let component: ExamplesCrudComponent;
  let fixture: ComponentFixture<ExamplesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamplesCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
