import { Component, Input} from '@angular/core';
import { Camera } from '../../model/camera';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrl: './device-item.component.css'
})
export class DeviceItemComponent  {
  @Input() camera!: Camera;
  
  //metoda powinna byc asynchroniczna-zmiennic.
  onCameraClick():void {
    console.log('Camera clicked:', this.camera.ip);
  }
}
