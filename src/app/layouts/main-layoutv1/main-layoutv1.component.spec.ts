import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutv1Component } from './main-layoutv1.component';

describe('MainLayoutv1Component', () => {
  let component: MainLayoutv1Component;
  let fixture: ComponentFixture<MainLayoutv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutv1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
