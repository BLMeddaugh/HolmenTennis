import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTennisComponent } from './other-tennis.component';

describe('OtherTennisComponent', () => {
  let component: OtherTennisComponent;
  let fixture: ComponentFixture<OtherTennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherTennisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
