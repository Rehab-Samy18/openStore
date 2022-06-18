import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsimpleproductsComponent } from './getsimpleproducts.component';

describe('GetsimpleproductsComponent', () => {
  let component: GetsimpleproductsComponent;
  let fixture: ComponentFixture<GetsimpleproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsimpleproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsimpleproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
