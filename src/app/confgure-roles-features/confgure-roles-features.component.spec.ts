import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfgureRolesFeaturesComponent } from './confgure-roles-features.component';

describe('ConfgureRolesFeaturesComponent', () => {
  let component: ConfgureRolesFeaturesComponent;
  let fixture: ComponentFixture<ConfgureRolesFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfgureRolesFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfgureRolesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
