import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplcommingmatchesComponent } from './uplcommingmatches.component';

describe('UplcommingmatchesComponent', () => {
  let component: UplcommingmatchesComponent;
  let fixture: ComponentFixture<UplcommingmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplcommingmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplcommingmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
