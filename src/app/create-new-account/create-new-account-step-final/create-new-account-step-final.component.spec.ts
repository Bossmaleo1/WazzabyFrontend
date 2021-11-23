import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateNewAccountStepFinalComponent } from './create-new-account-step-final.component';

describe('CreateNewAccountStepFinalComponent', () => {
  let component: CreateNewAccountStepFinalComponent;
  let fixture: ComponentFixture<CreateNewAccountStepFinalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewAccountStepFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAccountStepFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
