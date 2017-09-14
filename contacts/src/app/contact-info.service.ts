// import { Injectable } from '@angular/core';
// import { Contact } from './Contact';
//
// const CONTACTS: Contact[] = [{
//   name: 'Shubham',
//   number: '9041908421',
//   id: '1'
// },
// {
//   name: 'Shubha',
//   number: '9041908421',
//   id: '2'
// },
// {
//   name: 'Shubh',
//   number: '9041908421',
//   id: '3'
// }
// ];
//
// @Injectable()
// export class ContactInfoService {
//
//   constructor() {
//    }
//
//    getContacts(): Promise<Contact[]> {
//      return Promise.resolve(CONTACTS);
//    }
//
//    getContact(id: string): Promise<Contact> {
//     return this.getContacts()
//                .then(heroes => heroes.find(hero => hero.id === id));
//   }
// }
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

private contactsUrl = 'api/contacts';  // URL to web api

constructor(private http: Http) { }

getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
