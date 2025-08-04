import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { CameraContentGridComponent } from './camera-content-grid/camera-content-grid.component';
import { DriverConsoleContentComponent } from './driver-console-content/driver-console-content.component';
import { CameraViewComponent } from './camera-view/camera-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DeviceListComponent,
    CameraContentGridComponent,
    DriverConsoleContentComponent,
    CameraViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
