import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kp21CssComponent } from './kp21-css.component';

describe('Kp21CssComponent', () => {
  let component: Kp21CssComponent;
  let fixture: ComponentFixture<Kp21CssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kp21CssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kp21CssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
