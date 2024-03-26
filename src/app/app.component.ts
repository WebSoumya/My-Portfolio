import { Component, Optional } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('routerTransition', [
  //     transition('* <=> *', [    
  //       query(':enter', style({ position: 'fixed', width:'100%'}),{optional:true}),
  //       group([ 
  //         query(':enter', [
  //           style({ transform: 'translateX(100%)' }),
  //           animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))
  //         ])
  //         // query(':leave', [
  //         //   style({ transform: 'translateX(0%)' }),
  //         //   animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
  //       ])
  //     ])
  //   ])
  //  ]
})  
export class AppComponent {
  title = 'Portfolio';
  showheader=true
  constructor(private responsive: BreakpointObserver) {
    
  }
  ngoninit()
  {
    console.log(this.responsive.observe(Breakpoints.Web))
  }
}
