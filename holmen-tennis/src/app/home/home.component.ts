import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  courtLocation: google.maps.LatLngLiteral = {
    lat: 43.961699293028666,
    lng: -91.25149542242349,
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'satallite',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  markers: MapMarker[] = [];

  constructor() { }

  ngOnInit(): void {
      this.addTennisCourtsMarker();
  }

 addTennisCourtsMarker() {
    this.markers.push({
      position: {
        lat: this.courtLocation.lat,
        lng: this.courtLocation.lng
      },
      label: {
        color: 'red',
        text: 'School Tennis Courts',
      },
      title: 'School Tennis Courts',
      options: { animation: google.maps.Animation.DROP },
    } as unknown as MapMarker)
  }
}
