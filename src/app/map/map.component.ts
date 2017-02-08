import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 48.856614;
  lng: number = 2.352222;
  constructor() { }

  ngOnInit() {
  }

}
