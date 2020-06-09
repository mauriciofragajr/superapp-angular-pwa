import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {
    if (!navigator.geolocation) {
      console.log('location is not supported')
    } else {
      this.getCurrentPosition();
    }
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude} lon: ${position.coords.longitude}`);
    });
    this.watchPosition();
  }

  watchPosition() {
    navigator.geolocation.watchPosition((position) => {
      console.log(`watch position enabled => lat: ${position.coords.latitude} lon: ${position.coords.longitude}`);
    }, (err) => console.log(err), {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
}
