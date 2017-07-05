import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallandConfigureComponent } from './installand-configure.component';

describe('InstallandConfigureComponent', () => {
  let component: InstallandConfigureComponent;
  let fixture: ComponentFixture<InstallandConfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallandConfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallandConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
