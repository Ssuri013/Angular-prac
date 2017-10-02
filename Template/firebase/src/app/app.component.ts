import { Component } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
//  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string='';
  // constructor(af: AngularFire){
  //     this.items = af.database.list('/messages', {
  //       query: {
  //         limitToLast: 50
  //       }
  //     });
  //
  //     af.auth.subscrible(auth => {//prob error
  //       if(auth){
  //         this.name = auth;
  //       }
  //     });
  //
  // }
}
