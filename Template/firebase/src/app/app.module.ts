import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyApe-8SuSOcc6da7Ak0du53HWezMsHVDug",
    authDomain: "to-do-list-a7e5e.firebaseapp.com",
    databaseURL: "https://to-do-list-a7e5e.firebaseio.com",
    //projectId: "to-do-list-a7e5e",
    storageBucket: "to-do-list-a7e5e.appspot.com",
    messagingSenderId: "846705459030"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
