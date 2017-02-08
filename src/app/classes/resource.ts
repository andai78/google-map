export class Resource{

    id:number;
    name:string;
    adress:string;
    latitude:number;
    longitude:number;

    constructor(_id:number,_name:string, adr:string, lat:number, lng:number){
        this.id = _id;
        this.name = _name;
        this.adress = adr;
        this.latitude = lat;
        this.longitude = lng;
    }
}