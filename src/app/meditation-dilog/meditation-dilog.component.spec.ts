import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationDilogComponent } from './meditation-dilog.component';

describe('MeditationDilogComponent', () => {
  let component: MeditationDilogComponent;
  let fixture: ComponentFixture<MeditationDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditationDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditationDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
