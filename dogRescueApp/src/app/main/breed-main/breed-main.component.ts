import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { take } from 'rxjs/operators';
import { DogService } from 'src/app/dog.service';

@Component({
  selector: 'app-breed-main',
  templateUrl: './breed-main.component.html',
  styleUrls: ['./breed-main.component.css']
})
export class BreedMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dogService: DogService) { }

  public breedName: string;
  public breedImages;

  ngOnInit(): void {
    this.breedName = this.route.snapshot.paramMap.get('breedName');
    this.dogService.getDogBreed(this.breedName).pipe(take(1)).subscribe(val => {
      this.breedImages = val;
    });
  }
}
