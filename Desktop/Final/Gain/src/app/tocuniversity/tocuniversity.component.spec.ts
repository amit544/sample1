import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocuniversityComponent } from './tocuniversity.component';

describe('TocuniversityComponent', () => {
  let component: TocuniversityComponent;
  let fixture: ComponentFixture<TocuniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocuniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
