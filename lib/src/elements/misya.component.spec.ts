import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisyaComponent } from './misya.component';

describe('MisyaComponent', () => {
  let component: MisyaComponent;
  let fixture: ComponentFixture<MisyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisyaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
