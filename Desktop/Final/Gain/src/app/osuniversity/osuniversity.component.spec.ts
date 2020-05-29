import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsuniversityComponent } from './osuniversity.component';

describe('OsuniversityComponent', () => {
  let component: OsuniversityComponent;
  let fixture: ComponentFixture<OsuniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsuniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
