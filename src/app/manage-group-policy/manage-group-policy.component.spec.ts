import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupPolicyComponent } from './manage-group-policy.component';

describe('ManageGroupPolicyComponent', () => {
  let component: ManageGroupPolicyComponent;
  let fixture: ComponentFixture<ManageGroupPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
