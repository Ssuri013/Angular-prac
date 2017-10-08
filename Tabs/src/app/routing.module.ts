import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsageComponent } from './components/usage/usage.component';
import { CostComponent } from './components/cost/cost.component';
import { ServicesComponent } from './components/services/services.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent },
  {    path: 'cost',  component: CostComponent },
  {    path: 'usage',  component: UsageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
