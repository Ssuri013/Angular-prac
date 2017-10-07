import { Component } from '@angular/core';
//firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthProviders ,  } from 'angularfire2/auth';
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
