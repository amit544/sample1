import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatesyllbousComponent } from './gatesyllbous.component';

describe('GatesyllbousComponent', () => {
  let component: GatesyllbousComponent;
  let fixture: ComponentFixture<GatesyllbousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatesyllbousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatesyllbousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
