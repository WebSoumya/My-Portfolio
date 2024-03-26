import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path:'experience',component:ExperienceComponent,data: { state: 'experience' }
    
  },
  {
    path:'home',component:HomeComponent,data: { state: 'home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
