import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedMainComponent } from './breed-main.component';

describe('BreedMainComponent', () => {
  let component: BreedMainComponent;
  let fixture: ComponentFixture<BreedMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
