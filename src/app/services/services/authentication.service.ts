import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../models/AuthenticationRequest.model';
import { InterceptorService } from '../interceptor/interceptor.service';
import { TokenService } from '../token-service/token.service';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiURL:string ='http://localhost:9091/api/v1';
  constructor(private router : Router,private http:HttpClient, 
    private tokenService: TokenService,
    private interceptorService: InterceptorService ) { }

    login(AuthenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
      return this.http.post<AuthenticationResponse>(this.apiURL+'/auth/authenticate', AuthenticationRequest , {observe:'response'})
        .pipe(
          map(response => {
            const authResponse = new AuthenticationResponse();
            authResponse.id = response.body.id;
            authResponse.username = response.body.username;
            authResponse.token = response.body.token;
            return authResponse;
          })
        );
    }
}
