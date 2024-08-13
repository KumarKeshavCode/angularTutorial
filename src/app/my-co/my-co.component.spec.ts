import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoComponent } from './my-co.component';

describe('MyCoComponent', () => {
  let component: MyCoComponent;
  let fixture: ComponentFixture<MyCoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCoComponent]
    });
    fixture = TestBed.createComponent(MyCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
