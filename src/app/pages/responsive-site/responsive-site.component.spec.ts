import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSiteComponent } from './responsive-site.component';

describe('ResponsiveSiteComponent', () => {
  let component: ResponsiveSiteComponent;
  let fixture: ComponentFixture<ResponsiveSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
