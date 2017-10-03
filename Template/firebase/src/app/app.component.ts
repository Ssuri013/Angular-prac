import { Component } from '@angular/core';
//import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

 user: Observable<firebase.User>;
 items: AngularFireList<any[]>;

 msgVal: string = '';

 constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
   this.items = af.list<any>('/messages');
   console.log(this.items);
   this.user = this.afAuth.authState;

 }

 login() {
    this.afAuth.auth.signInAnonymously();
}

logout() {
    this.afAuth.auth.signOut();
}

Send(desc: string) {
  console.log(desc);
    //this.items.push( [{ message: desc}] );
    this.msgVal = '';

}
}
