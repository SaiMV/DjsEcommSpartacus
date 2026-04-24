import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjsSearchbarComponent } from './djs-searchbar.component';

describe('DjsSearchbarComponent', () => {
  let component: DjsSearchbarComponent;
  let fixture: ComponentFixture<DjsSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjsSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DjsSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
