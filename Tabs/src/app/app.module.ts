import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './directive/my-dir.directive';

import { InfoService } from './info.service';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './Components/list.item/list.item.component';
import { UsageComponent } from './components/usage/usage.component';
import { CostComponent } from './components/cost/cost.component';
import { ServicesComponent } from './components/services/services.component';

import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    ListComponent,
    ListItemComponent,
    UsageComponent,
    ServicesComponent,
    CostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
