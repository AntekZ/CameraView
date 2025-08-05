import { Component } from '@angular/core';
import { Camera } from '../../model/camera';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
    cameras: Camera[] = [
    {name: 'Cam1', ip: '192.3.1.1', status: 'On'},
    {name: 'Cam2', ip: '10.1.1.1', status: 'Off'},
    {name: 'Cam3', ip: '12.1.1.3', status: 'On'},
    {name: 'Cam4', ip: '13.0.2.3', status: 'Off'},
    {name: 'Cam2', ip: '10.1.1.1', status: 'Off'}
  ]
  
}
