import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionLisComponent } from './region-lis.component';

describe('RegionLisComponent', () => {
  let component: RegionLisComponent;
  let fixture: ComponentFixture<RegionLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
