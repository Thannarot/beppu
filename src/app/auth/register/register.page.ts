import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }

}
