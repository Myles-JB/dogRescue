import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {
  @Input() dogImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
