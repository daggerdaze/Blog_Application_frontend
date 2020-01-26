import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  invalid = false;
  constructor(private router: Router, private loginservice: AuthenticationService, private serv: AppService) { }

  ngOnInit() {
  }
  checklogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(data => {
      this.serv.isLoggedIn(true);
      this.router.navigate(['homepage']);
      // this.serv.isLoggedIn(false);
      // alert("Enter a valid username");
    });

}
  logout() {
    this.serv.isLoggedIn(false);
  }
}

