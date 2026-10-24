import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPreview } from './home-services-preview';

describe('ServicesPreview', () => {
  let component: ServicesPreview;
  let fixture: ComponentFixture<ServicesPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
