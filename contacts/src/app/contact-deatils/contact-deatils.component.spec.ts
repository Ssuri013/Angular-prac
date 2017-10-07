import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeatilsComponent } from './contact-deatils.component';

describe('ContactDeatilsComponent', () => {
  let component: ContactDeatilsComponent;
  let fixture: ComponentFixture<ContactDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


});
