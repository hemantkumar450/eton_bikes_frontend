import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyAndRegComponent } from './warranty-and-reg.component';

describe('WarrantyAndRegComponent', () => {
  let component: WarrantyAndRegComponent;
  let fixture: ComponentFixture<WarrantyAndRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyAndRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyAndRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
