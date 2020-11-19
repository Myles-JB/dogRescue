import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BreedMainComponent } from './main/breed-main/breed-main.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'breed/:breedName', component: BreedMainComponent },
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, BreedMainComponent, MainComponent];
