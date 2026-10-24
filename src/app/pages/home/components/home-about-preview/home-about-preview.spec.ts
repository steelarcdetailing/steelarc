import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutPreview } from './home-about-preview';

describe('HomeAboutPreview', () => {
  let component: HomeAboutPreview;
  let fixture: ComponentFixture<HomeAboutPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAboutPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
