import { Component, input } from '@angular/core';
import {IHousingLocation} from '../../../interfaces/housing-location';
import { RouterLink,Router} from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation= input<IHousingLocation>();
  constructor(private router:Router)
  {

  }
  
 navigateToDetails()
 {
    this.router.navigate(['/details',this.housingLocation()?.id]);
 }
}
