import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYouComponent } from './not-you.component';

describe('NotYouComponent', () => {
  let component: NotYouComponent;
  let fixture: ComponentFixture<NotYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
