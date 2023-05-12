import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorBallComponent } from './cursor-ball.component';

describe('CursorBallComponent', () => {
  let component: CursorBallComponent;
  let fixture: ComponentFixture<CursorBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursorBallComponent]
    });
    fixture = TestBed.createComponent(CursorBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
