import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactDeatilsComponent } from './contact-deatils/contact-deatils.component';
import { ContactInfoService} from './contact-info.service';
import { ContactsComponent } from './contacts.component';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDeatilsComponent,
    ContactsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
    path: 'contacts',
    component: ContactsComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: ContactDeatilsComponent
    },
    ])
  ],
  providers: [ContactInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
