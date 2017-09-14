import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactDeatilsComponent } from './contact-deatils/contact-deatils.component';
import { ContactsComponent } from './contacts.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  {    path: 'dashboard',  component: DashboardComponent },
  {    path: 'detail/:id',  component: ContactDeatilsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
