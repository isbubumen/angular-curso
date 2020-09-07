import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompTestComponent } from './new-comp-test.component';

describe('NewCompTestComponent', () => {
  let component: NewCompTestComponent;
  let fixture: ComponentFixture<NewCompTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
