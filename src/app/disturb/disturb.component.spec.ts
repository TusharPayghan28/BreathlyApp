import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisturbComponent } from './disturb.component';

describe('DisturbComponent', () => {
  let component: DisturbComponent;
  let fixture: ComponentFixture<DisturbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisturbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisturbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
