import { Component, signal } from '@angular/core';
import { RouterOutlet, Router} from '@angular/router';
import { Inject } from '@angular/core';
import{Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Homes-app');
  name:string="hemanth";
constructor(private router:Router)
{
  
}
  Onclick()
  {
      this.router.navigate([""]);
  }
}
