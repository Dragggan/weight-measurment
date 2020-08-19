import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMeasurmentsComponent } from './list-of-measurments.component';

describe('ListOfMeasurmentsComponent', () => {
  let component: ListOfMeasurmentsComponent;
  let fixture: ComponentFixture<ListOfMeasurmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfMeasurmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMeasurmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
