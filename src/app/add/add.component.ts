import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UsersService } from '../users.service';
import { HeaderService } from '../header.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  loginState: boolean = false;
  loginStateSubscription: Subscription;

  user: any = {};

  constructor(
    private users: UsersService,
    private header: HeaderService,
    private router: Router ) {}

  ngOnInit() {
    console.log('init add');
    this.header.setTitulo('Add');
    this.header.setBack(true, ['/dashboard']);
    this.loginStateSubscription = this.users.getloginState()
    .subscribe(loginState => this.subscribeLoginState(loginState));
  }

  private subscribeLoginState(loginState: boolean):void {
    this.loginState = loginState;
    if (!this.loginState) {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy() {
    console.log('destroy add');
    this.loginStateSubscription.unsubscribe();
  }

}
