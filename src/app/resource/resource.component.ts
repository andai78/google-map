import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Resource } from '../classes/resource';
import { Info } from '../classes/info';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  listResource:Array<Info> = [];
  showInfo:boolean = false;

  constructor(private myServ:FetchDataService) { }


  getInfo(){
    this.myServ.getResource().subscribe(data =>{
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
          this.listResource.push(_info);
        }
    })
  }

  moreInfo(){
    console.log("yes")
  }

  ngOnInit() {
    this.getInfo()
  }

}
