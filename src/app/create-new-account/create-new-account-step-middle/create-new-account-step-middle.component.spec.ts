import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAccountStepMiddleComponent } from './create-new-account-step-middle.component';

describe('CreateNewAccountStepMiddleComponent', () => {
  let component: CreateNewAccountStepMiddleComponent;
  let fixture: ComponentFixture<CreateNewAccountStepMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewAccountStepMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAccountStepMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
