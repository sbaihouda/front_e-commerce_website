import { Component } from '@angular/core';
import { devices } from '../home';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {
  devices : Observable<devices> |undefined
  info :any
  constructor( private HomeService: HomeService){}

  ngOnInit() : void {
    this.showDeviceslist();
    this.HomeService.getDevices().subscribe((data: any) => {
      this.info = data; // Stockez les données dans la variable jsonData
    });
  }
  showDeviceslist(){
    this.devices= this.HomeService.getDevices();
  }
}
