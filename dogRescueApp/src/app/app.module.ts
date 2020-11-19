import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BreedButtonComponent } from './main/breed-button/breed-button.component';
import { NavigationBarComponent } from './main/navigation-bar/navigation-bar.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { BreedMainComponent } from './main/breed-main/breed-main.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HomeComponent } from './main/home/home.component';
import { DogCardComponent } from './main/dog-card/dog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    BreedButtonComponent,
    NavigationBarComponent,
    SearchFilterPipe,
    // BreedMainComponent,
    routingComponents,
    HomeComponent,
    DogCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
