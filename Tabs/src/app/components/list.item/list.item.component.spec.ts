import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List.ItemComponent } from './list.item.component';

describe('List.ItemComponent', () => {
  let component: List.ItemComponent;
  let fixture: ComponentFixture<List.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
