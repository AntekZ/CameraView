import { AfterViewInit, Component, ElementRef, ViewChild  } from '@angular/core';

declare var JSMpeg: any; 

@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrl: './camera-view.component.css'
})
export class CameraViewComponent implements AfterViewInit {
   @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  ngAfterViewInit() {
    // Po załadowaniu komponentu, połącz się z WebSocketem
    // Backend musi już streamować na ws://localhost:9999
    new JSMpeg.Player('ws://localhost:9999', {
      canvas: this.canvasRef.nativeElement
    });
  }

}
