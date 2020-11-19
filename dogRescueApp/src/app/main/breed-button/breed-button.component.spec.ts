import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedButtonComponent } from './breed-button.component';

describe('BreedButtonComponent', () => {
  let component: BreedButtonComponent;
  let fixture: ComponentFixture<BreedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
