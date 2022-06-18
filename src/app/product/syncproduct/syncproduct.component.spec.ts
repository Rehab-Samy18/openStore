import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncproductComponent } from './syncproduct.component';

describe('SyncproductComponent', () => {
  let component: SyncproductComponent;
  let fixture: ComponentFixture<SyncproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
