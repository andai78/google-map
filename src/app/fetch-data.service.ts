import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchDataService {

  constructor(private _http:Http) { }

  getResource(){
     return this._http.get('data/data.json').map(data => 
       data.json());
  }

}
