import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerBComponent } from './trigger-b.component';

describe('TriggerBComponent', () => {
  let component: TriggerBComponent;
  let fixture: ComponentFixture<TriggerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
