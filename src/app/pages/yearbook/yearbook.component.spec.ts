import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbookComponent } from './yearbook.component';

describe('YearbookComponent', () => {
  let component: YearbookComponent;
  let fixture: ComponentFixture<YearbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearbookComponent]
    });
    fixture = TestBed.createComponent(YearbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
