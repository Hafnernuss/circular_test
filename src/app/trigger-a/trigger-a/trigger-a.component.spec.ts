import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerAComponent } from './trigger-a.component';

describe('TriggerAComponent', () => {
  let component: TriggerAComponent;
  let fixture: ComponentFixture<TriggerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
