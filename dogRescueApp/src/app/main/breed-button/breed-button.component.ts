import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed-button',
  templateUrl: './breed-button.component.html',
  styleUrls: ['./breed-button.component.css']
})
export class BreedButtonComponent implements OnInit {
@Input() breed: string;
  constructor() { }

  ngOnInit(): void {
  }
}
