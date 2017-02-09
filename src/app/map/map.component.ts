import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Coord } from '../classes/coord';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 48.856614;
  lng: number = 2.352222;
  coord: Array<Coord> = [];

  constructor(private serv:FetchDataService) { }

  getLatAndLng(){
    this.serv.getResource().subscribe(data =>{
      for(var i = 0; i<data.length; i++){
        let c = new Coord(data[i].latitude,data[i].longitude);
       // console.log(this.coord);
        this.coord.push(c);
      }
        
       console.log(this.coord);
    })
  }

  ngOnInit() {
    this.getLatAndLng();
  }

}
