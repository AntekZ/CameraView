import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConsoleContentComponent } from './driver-console-content.component';

describe('DriverConsoleContentComponent', () => {
  let component: DriverConsoleContentComponent;
  let fixture: ComponentFixture<DriverConsoleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverConsoleContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverConsoleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
