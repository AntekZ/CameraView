import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CameraService{
    private http: HttpClient;
    private backendURL:string = 'http://localhost:3000';
    constructor(http: HttpClient) 
    {
        this.http = http;
    }

    StartStream(ip: string): Observable<any> {
      return this.http.post(`${this.backendURL}/start-stream`,{ip});
    }

    StopStream(){
        
    }
}