import { Component, Input, OnInit,OnChanges, SimpleChanges} from '@angular/core';
import { Camera } from '../../model/camera';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrl: './device-item.component.css'
})
export class DeviceItemComponent  {
  @Input() camera!: Camera;

}
