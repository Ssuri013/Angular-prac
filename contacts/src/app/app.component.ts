import { Component } from '@angular/core';

export class Contact {
	number:string;
	name:string;
};

const CONTACTS: Contact[] = [{
    name: 'Shubham',
    number: '9041908421'
  },
  {
    name: 'Shubha',
    number: '9041908421'
  },
  {
    name: 'Shubh',
    number: '9041908421'
  }
 ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Contacts';
  selectedContact: Contact;

  contacts = CONTACTS;
  
  onSelect(contact: Contact): void{
      this.selectedContact = contact;
      console.log(this.selectedContact);
  }

}
