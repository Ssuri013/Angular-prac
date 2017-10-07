import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './directive/my-dir.directive';

import { InfoService } from './info.service';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './Components/list.item/list.item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
