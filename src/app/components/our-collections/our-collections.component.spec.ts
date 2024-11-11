import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollectionsComponent } from './our-collections.component';

describe('OurCollectionsComponent', () => {
  let component: OurCollectionsComponent;
  let fixture: ComponentFixture<OurCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCollectionsComponent]
    });
    fixture = TestBed.createComponent(OurCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
