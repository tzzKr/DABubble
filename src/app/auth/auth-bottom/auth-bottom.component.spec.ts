import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBottomComponent } from './auth-bottom.component';

describe('AuthBottomComponent', () => {
  let component: AuthBottomComponent;
  let fixture: ComponentFixture<AuthBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthBottomComponent]
    });
    fixture = TestBed.createComponent(AuthBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
