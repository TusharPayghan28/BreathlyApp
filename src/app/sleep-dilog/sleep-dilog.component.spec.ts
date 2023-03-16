import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDilogComponent } from './sleep-dilog.component';

describe('SleepDilogComponent', () => {
  let component: SleepDilogComponent;
  let fixture: ComponentFixture<SleepDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleepDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
