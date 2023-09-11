import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirteTextBoxComponent } from './wirte-text-box.component';

describe('WirteTextBoxComponent', () => {
  let component: WirteTextBoxComponent;
  let fixture: ComponentFixture<WirteTextBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirteTextBoxComponent]
    });
    fixture = TestBed.createComponent(WirteTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
