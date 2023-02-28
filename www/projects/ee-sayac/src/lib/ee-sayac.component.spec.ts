import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeSayacComponent } from './ee-sayac.component';

describe('EeSayacComponent', () => {
  let component: EeSayacComponent;
  let fixture: ComponentFixture<EeSayacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeSayacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EeSayacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
