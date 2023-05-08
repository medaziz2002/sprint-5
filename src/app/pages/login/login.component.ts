import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { NgToastService } from 'ng-angular-popup';

import { JwtHelperService } from '@auth0/angular-jwt';

import { TokenService } from 'src/app/services/token-service/token.service';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest.model';
import { AuthenticationService } from 'src/app/services/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest = {};
  errorMsg = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  register() {
    this.router.navigate(['register']);
  }

  login() {
    console.log(this.authRequest)
    this.errorMsg = '';
    this.authService.login(
      this.authRequest
      
    ).subscribe({
      next: (response) => {
        console.log("le response est"+response)
        this.tokenService.saveResponse(response);
         
        this.router.navigate(['ajout-phone']);
      },
      error: (err) => {
        console.log(err);
      
      }
    });
  }

  
}
