import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateNewAccountStepMiddleComponent } from './create-new-account-step-middle.component';

describe('CreateNewAccountStepMiddleComponent', () => {
  let component: CreateNewAccountStepMiddleComponent;
  let fixture: ComponentFixture<CreateNewAccountStepMiddleComponent>;

  beforeEach(waitForAsync(() => {
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
