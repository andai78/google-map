import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Resource } from '../classes/resource';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  listResource: Array<Resource>;
  constructor(private myServ:FetchDataService) { }

  displayResource(){
      this.myServ.getResource().subscribe(data => {
          this.listResource = data;
      })
  }

  ngOnInit() {
    this.displayResource()
  }

}
