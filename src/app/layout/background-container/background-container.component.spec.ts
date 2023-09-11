import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundContainerComponent } from './background-container.component';

describe('BackgroundContainerComponent', () => {
  let component: BackgroundContainerComponent;
  let fixture: ComponentFixture<BackgroundContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundContainerComponent]
    });
    fixture = TestBed.createComponent(BackgroundContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
