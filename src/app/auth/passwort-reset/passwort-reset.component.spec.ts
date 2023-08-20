import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswortResetComponent } from './passwort-reset.component';

describe('PasswortResetComponent', () => {
  let component: PasswortResetComponent;
  let fixture: ComponentFixture<PasswortResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswortResetComponent]
    });
    fixture = TestBed.createComponent(PasswortResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
