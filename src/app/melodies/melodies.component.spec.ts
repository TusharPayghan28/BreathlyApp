import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiesComponent } from './melodies.component';

describe('MelodiesComponent', () => {
  let component: MelodiesComponent;
  let fixture: ComponentFixture<MelodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
