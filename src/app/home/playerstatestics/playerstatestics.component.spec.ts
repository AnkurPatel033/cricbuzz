import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstatesticsComponent } from './playerstatestics.component';

describe('PlayerstatesticsComponent', () => {
  let component: PlayerstatesticsComponent;
  let fixture: ComponentFixture<PlayerstatesticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerstatesticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstatesticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
