import { Component } from '@angular/core';
//firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AuthProviders  } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
//  user: Observable<firebase.User>;
 // items: AngularFireList<any[]>;
 //
 // msgVal: string = '';
 // afg: AngularFireDatabase;
 // constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
 //   this.items = af.list('/messages/-KvenKnKrb0o9', ref => ref.limitToLast(50));
 //   console.log(this.items.query);
 //  // console.log(this.items);

 //   this.afg = af;
 // }
 // items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
 //  size$: BehaviorSubject<string|null>;
 //
 //  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
 //    this.size$ = new BehaviorSubject(null);
 //    this.items = this.size$.switchMap(size =>
 //      db.list('/messages', ref =>
 //        size ? ref.orderByChild('size').equalTo(size) : ref
 //      ).valueChanges()
 //    );
 //       this.user = this.afAuth.authState;
 //  }

//   filterBy(size: string|null) {
//     this.size$.next(size);
//   }
//
//  login() {
//    this.afAuth.auth.signInAnonymously();
// }
//
// logout() {
//     this.afAuth.auth.signOut();
// }
//
// Send(desc: string) {
//     console.log(desc);
// //    this.items.push( [{message: desc}] );
// //    this.msgVal = '';
//     //this.items = this.afg.list<any>('/messages');
//     console.log(this.items);
//
// }
// }
