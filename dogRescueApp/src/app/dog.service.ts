import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private http: HttpClient) {}
  randomDogURL = 'https://dog.ceo/api/breeds/image/random';
  listOfBreedsURL = 'https://dog.ceo/api/breeds/list/all';

  getRandomDog() {
    return this.http
      .get(this.randomDogURL)
      .pipe(map((val: any) => val.message));
  }

  getListOfBreeds(): Observable<any> {
    return this.http
      .get(this.listOfBreedsURL)
      .pipe(map((val: any) => val.message));
  }

  getDogBreed(breed: string) {
    return this.http.get('https://dog.ceo/api/breed/' + breed + '/images').pipe(map((val: any) => val.message));
  }
}
