import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {IHousingLocation } from '../../../interfaces/housing-location';
import { HousingService } from '../housing-service';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id:string|undefined;
  route!:ActivatedRoute;
  currentHousingLocation:IHousingLocation|undefined;

bookingForm = new FormGroup(
  {
    FirstName:new FormControl('',Validators.required),
    LastName: new FormControl(''),
    email:new FormControl('', [Validators.required, Validators.email])
  }
)
  
  constructor(route:ActivatedRoute, service:HousingService)
  {
      this.route=route;
      this.id=this.route.snapshot.paramMap.get('id')|| undefined;
      console.log("id for fetching the object: "+this.id);
      service.getHousingLocationById(Number(this.id)).subscribe(
         {
          next: (response)=>{
            this.currentHousingLocation= response;         
          },
          error: (error)=>{
            console.log(error);
          }    
         }
      );
      console.log(this.currentHousingLocation);
  }
  OnSubmit()
  {
    console.log(this.bookingForm.value.FirstName);
    console.log(this.bookingForm.value.LastName);
    console.log(this.bookingForm.value.email);
  }


}
