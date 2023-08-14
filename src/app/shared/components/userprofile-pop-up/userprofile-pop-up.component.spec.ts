import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilePopUpComponent } from './userprofile-pop-up.component';

describe('UserprofilePopUpComponent', () => {
  let component: UserprofilePopUpComponent;
  let fixture: ComponentFixture<UserprofilePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprofilePopUpComponent]
    });
    fixture = TestBed.createComponent(UserprofilePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
