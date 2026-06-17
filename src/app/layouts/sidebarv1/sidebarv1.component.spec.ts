import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarv1Component } from './sidebarv1.component';

describe('Sidebarv1Component', () => {
  let component: Sidebarv1Component;
  let fixture: ComponentFixture<Sidebarv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarv1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
