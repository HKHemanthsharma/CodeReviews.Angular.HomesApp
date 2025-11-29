import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {IHousingLocation} from '../../../interfaces/housing-location';
import {HousingService} from '../housing-service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [HousingLocation, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 housinglocation:IHousingLocation[]=[];
filteredLocations:IHousingLocation[]=[];
 housingService!:HousingService;
 filteringform= new FormGroup(
  {
    apartment: new FormControl('')
  }
 )
 constructor(service:HousingService)
 {
    this.housingService=service;
    this.housingService.getAllHousingLocations().subscribe(
      {
        next:(response)=> {console.log(response);
                            this.housinglocation=response;
                            this.filteredLocations=response;
        }
      }
    );
 }
 OnSubmit()
 {
   this.filteredLocations=this.housinglocation.filter(elem=> elem.name.toLowerCase().includes(this.filteringform.value.apartment ?? ''));
 }
}
