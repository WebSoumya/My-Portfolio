import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
      trigger('routerTransition', [
        transition('* <=> *', [    
          query(':enter', style({ position: 'fixed', width:'100%'}),{optional:true}),
          group([ 
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))
            ])
            // query(':leave', [
            //   style({ transform: 'translateX(0%)' }),
            //   animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))]),
          ])
        ])
      ])
     ]
})
export class HeaderComponent {
  getState(outlet:any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }

}
