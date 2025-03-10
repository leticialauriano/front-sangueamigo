import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;


  ngOnInit() {
    this.setCurrentLocation();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }

}