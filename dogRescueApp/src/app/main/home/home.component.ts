import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DogService } from 'src/app/dog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public randomDog;
  public listOfBreeds;
  public dogSearch;

  constructor(private dogService: DogService, public router: Router) {}

  ngOnInit(): void {
    this.dogService
      .getRandomDog()
      .pipe(take(1))
      .subscribe((dog) => {
        this.randomDog = dog;
      });

    this.dogService
      .getListOfBreeds()
      .pipe(take(1))
      .subscribe((list) => {
        this.listOfBreeds = Object.keys(list);
      });
  }
}
