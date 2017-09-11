import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../Contact';


@Component({
  selector: 'app-contact-deatils',
  templateUrl: './contact-deatils.component.html',
  styleUrls: ['./contact-deatils.component.css']
})
export class ContactDeatilsComponent implements OnInit {
@Input() contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
