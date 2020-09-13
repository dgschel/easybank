import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroShotComponent } from './hero-shot.component';

describe('HeroShotComponent', () => {
  let component: HeroShotComponent;
  let fixture: ComponentFixture<HeroShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
