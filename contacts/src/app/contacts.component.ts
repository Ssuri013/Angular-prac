import { Component, OnInit } from '@angular/core';
import {Contact} from './Contact';
import {ContactInfoService} from './contact-info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactsComponent implements OnInit {
  title = 'Contacts';
  selectedContact: Contact;


  constructor(private router: Router,
    private contactInfoService: ContactInfoService) {
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
  gotoDetail(): void {
   this.router.navigate(['/detail', this.selectedContact.id]);
 }

}
