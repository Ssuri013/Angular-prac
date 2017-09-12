import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { ContactInfoService } from '../contact-info.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-contact-deatils',
  templateUrl: './contact-deatils.component.html',
  styleUrls: ['./contact-deatils.component.css']
})
export class ContactDeatilsComponent implements OnInit {
 @Input() contact: Contact;
constructor(
  private contactInfoService: ContactInfoService,
  private route: ActivatedRoute,
  private location: Location
) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.contactInfoService.getContact( params.get('id')))
      .subscribe(contact => this.contact = contact);
  }
  goBack(): void {
    this.location.back();
  }

}
