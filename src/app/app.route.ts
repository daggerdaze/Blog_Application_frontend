import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MyprofileComponent} from './myprofile/myprofile.component';

export const MAIN: Routes = [
  {
    path:'',redirectTo:'/signup',pathMatch:'full',
  },
  {
    path : 'homepage' ,
    component : HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
  },]
