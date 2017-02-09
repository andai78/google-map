import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Coord } from '../classes/coord';
import { Info } from '../classes/info';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 48.856614;
  lng: number = 2.352222;
  coord: Array<Coord> = [];
  info:Array<Info> = [];

  constructor(private serv:FetchDataService) { }

  /*getLatAndLng(){
    this.serv.getResource().subscribe(data =>{
      for(var i = 0; i<data.length; i++){
        let c = new Coord(data[i].latitude,data[i].longitude);
       // console.log(this.coord);
        this.coord.push(c);
      }
        
    })
  }*/

  getInfo(){
    this.serv.getResource().subscribe(data =>{
        for(var i = 0; i<data.length; i++){
          let _info = new Info(
            data[i].name,
            data[i].adress,
            data[i].latitude,
            data[i].longitude,
            data[i].groupe,
            data[i].info.date_start,
            data[i].info.hour_start,
            data[i].info.date_end,
            data[i].info.hour_end,
            data[i].info.comments
            );
          this.info.push(_info);
        }
    })
  }

  ngOnInit() {
    //this.getLatAndLng();
    this.getInfo();
  }

}
