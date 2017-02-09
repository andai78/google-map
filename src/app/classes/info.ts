export class Info{

    name:string;
    adress:string;
    latitude:number;
    longitude:number;
    groupe:string;
    date_start:string;
    hour_start:string;
    date_end:string;
    hour_end:string;
    comments:string;

    constructor(name,add,lat,lng,gr,d_start,h_start,d_end,h_end,c){
        this.name = name;
        this.adress = add;
        this.latitude = lat;
        this.longitude = lng;
        this.groupe = gr;
        this.date_start = d_start;
        this.hour_start = h_start;
        this.date_end = d_end;
        this.hour_end = h_end;
        this.comments = c;
    }
}