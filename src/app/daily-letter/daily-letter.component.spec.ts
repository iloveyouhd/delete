import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLetterComponent } from './daily-letter.component';

describe('DailyLetterComponent', () => {
  let component: DailyLetterComponent;
  let fixture: ComponentFixture<DailyLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
