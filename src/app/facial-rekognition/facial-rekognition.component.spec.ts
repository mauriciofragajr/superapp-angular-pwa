import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRekognitionComponent } from './facial-rekognition.component';

describe('FacialRekognitionComponent', () => {
  let component: FacialRekognitionComponent;
  let fixture: ComponentFixture<FacialRekognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRekognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialRekognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
