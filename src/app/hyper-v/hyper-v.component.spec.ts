import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperVComponent } from './hyper-v.component';

describe('HyperVComponent', () => {
  let component: HyperVComponent;
  let fixture: ComponentFixture<HyperVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
