import { Component, OnInit } from '@angular/core';
import {Contact } from '../Contact';
import {ContactInfoService} from '../contact-info.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];
    constructor(private contactInfoService: ContactInfoService) { }
    ngOnInit(): void {
      this.contactInfoService.getContacts()
        .then(contacts => this.contacts = contacts.slice(0, 4)); //top 5
    }

}
