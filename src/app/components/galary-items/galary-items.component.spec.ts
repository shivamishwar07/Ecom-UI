import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryItemsComponent } from './galary-items.component';

describe('GalaryItemsComponent', () => {
  let component: GalaryItemsComponent;
  let fixture: ComponentFixture<GalaryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalaryItemsComponent]
    });
    fixture = TestBed.createComponent(GalaryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
