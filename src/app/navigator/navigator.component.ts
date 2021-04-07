import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(private auth: AuthService, private route: Router) { 

      this.auth.userslogin.subscribe( 
      (u:User) => {
          this.isUserLoggedIn = true
        }
      )

      this.auth.userlogout.subscribe( 
      () => {
          this.isUserLoggedIn = false
        }
      )

      this.auth.usersregister.subscribe( 
        (u:User) => {
          this.isUserLoggedIn = true
        }
      )
  }

  ngOnInit() {    
    this.isUserLoggedIn =  this.auth.isUserLoggedIn();
    if (!this.isUserLoggedIn){
      console.log('login');
      this.route.navigate(['login'])
    }
    else{
      this.route.navigate(['listasr'])
      console.log('listasr');
    }
  }

  logout(){
    this.auth.logOut();
    this.route.navigate(['login'])
  }

}