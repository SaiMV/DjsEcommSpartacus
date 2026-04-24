import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsSiteloginComponent } from './djs-sitelogin.component';

describe('DjsSiteloginComponent', () => {
  let component: DjsSiteloginComponent;
  let fixture: ComponentFixture<DjsSiteloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjsSiteloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjsSiteloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
