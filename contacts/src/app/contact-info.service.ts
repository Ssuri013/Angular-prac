import { Injectable } from '@angular/core';
import { Contact } from './Contact';

const CONTACTS: Contact[] = [{
  name: 'Shubham',
  number: '9041908421',
  id: '1'
},
{
  name: 'Shubha',
  number: '9041908421',
  id: '2'
},
{
  name: 'Shubh',
  number: '9041908421',
  id: '3'
}
];

@Injectable()
export class ContactInfoService {

  constructor() {
   }

   getContacts(): Promise<Contact[]> {
     return Promise.resolve(CONTACTS);
   }

   getContact(id: string): Promise<Contact> {
    return this.getContacts()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
