import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraContentGridComponent } from './camera-content-grid.component';

describe('CameraContentGridComponent', () => {
  let component: CameraContentGridComponent;
  let fixture: ComponentFixture<CameraContentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraContentGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraContentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
