import { chargeUsers } from './store/actions/user.actions';
import { AppState } from './store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  // title = 'reduxpractice';
  users$ : Observable<any> = new Observable;
  constructor(
    private userService: UserService,
    public store: Store<AppState>,
  ) {
    this.users$ = this.store.pipe(select('users'));
  }
  

  showUsers(){
    
  }
  ngOnInit(){
    this.userService
    .getUsers()
    .subscribe(_ => this.store.dispatch(chargeUsers()));
  }
}
