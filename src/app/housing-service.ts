import { Injectable } from '@angular/core';
import{IHousingLocation} from '../../interfaces/housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList:IHousingLocation[]=[];
  Baseurl="http://localhost:3000/";
  Location!:IHousingLocation;
constructor(private httpclient: HttpClient)
{
}
  getAllHousingLocations():Observable<IHousingLocation[]>
  {
      return this.httpclient.get<IHousingLocation[]>(this.Baseurl+'locations');
  }

  getHousingLocationById(id:number):Observable<IHousingLocation | undefined > 
  {
    
     return this.httpclient.get<IHousingLocation[]>(this.Baseurl+"locations").pipe(
      map(
        locations=>locations.find(elem=>Number(elem.id)===id)
      )
     );  
  }
  
}
