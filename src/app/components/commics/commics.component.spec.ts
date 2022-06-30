import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommicsComponent } from './commics.component';

describe('CommicsComponent', () => {
  let component: CommicsComponent;
  let fixture: ComponentFixture<CommicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
