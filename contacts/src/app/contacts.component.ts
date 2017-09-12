import { Component, OnInit } from '@angular/core';
import {Contact} from './Contact';
import {ContactInfoService} from './contact-info.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class ContactsComponent implements OnInit {
  title = 'Contacts';
  selectedContact: Contact;


  constructor(private contactInfoService: ContactInfoService) {
  }

  contacts: Contact[];

  getContacts(): void {
    this.contactInfoService.getContacts().then(contacts => this.contacts = contacts);
  }

    ngOnInit(): void {
      this.getContacts();
    }

  onSelect(contact: Contact): void{
      this.selectedContact = contact;
      console.log(this.selectedContact);
  }

}
