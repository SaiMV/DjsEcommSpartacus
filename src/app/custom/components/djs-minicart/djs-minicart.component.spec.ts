import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsMinicartComponent } from './djs-minicart.component';

describe('DjsMinicartComponent', () => {
  let component: DjsMinicartComponent;
  let fixture: ComponentFixture<DjsMinicartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjsMinicartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjsMinicartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
