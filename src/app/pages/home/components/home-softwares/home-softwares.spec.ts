import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSoftwares } from './home-softwares';

describe('HomeSoftwares', () => {
  let component: HomeSoftwares;
  let fixture: ComponentFixture<HomeSoftwares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSoftwares],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSoftwares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
