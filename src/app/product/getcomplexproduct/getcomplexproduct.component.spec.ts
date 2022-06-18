import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomplexproductComponent } from './getcomplexproduct.component';

describe('GetcomplexproductComponent', () => {
  let component: GetcomplexproductComponent;
  let fixture: ComponentFixture<GetcomplexproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcomplexproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcomplexproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
