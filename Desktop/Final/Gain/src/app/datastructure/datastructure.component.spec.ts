import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructureComponent } from './datastructure.component';

describe('DatastructureComponent', () => {
  let component: DatastructureComponent;
  let fixture: ComponentFixture<DatastructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
