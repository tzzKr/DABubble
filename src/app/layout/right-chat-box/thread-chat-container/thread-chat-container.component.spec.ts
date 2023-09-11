import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadChatContainerComponent } from './thread-chat-container.component';

describe('ThreadChatContainerComponent', () => {
  let component: ThreadChatContainerComponent;
  let fixture: ComponentFixture<ThreadChatContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadChatContainerComponent]
    });
    fixture = TestBed.createComponent(ThreadChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
