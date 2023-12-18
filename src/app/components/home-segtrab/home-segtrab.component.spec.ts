import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSegtrabComponent } from './home-segtrab.component';

describe('HomeSegtrabComponent', () => {
  let component: HomeSegtrabComponent;
  let fixture: ComponentFixture<HomeSegtrabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSegtrabComponent]
    });
    fixture = TestBed.createComponent(HomeSegtrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
