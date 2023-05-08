import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse.model';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveResponse(response: AuthenticationResponse): void {
    localStorage.setItem('token', response.token as string);
    localStorage.setItem('id', response.id as any as string);
    localStorage.setItem('nom', response.username as any as string);
    
  }

  get getToken(): string {
    return localStorage.getItem('token') as string;
  }

  get getUserId(): number {
    return localStorage.getItem('id') as any as number;
  }

  get getUsername(): string {
    return localStorage.getItem('nom') as any as string;
  }

  get userRole(): string {
    const token = this.getToken;
    if (token) {
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      return decodedToken.role[0].name === 'ROLE_USER' ? 'CUSTOMER' : 'ADMIN';
    }
    return '--';
  }

  cleanup(): void {
    localStorage.clear();
  }

  get isTokenValid(): boolean {
    const token = this.getToken;
    if (token) {
      const jwtHelper = new JwtHelperService();
      const isTokenExpired = jwtHelper.isTokenExpired(token);
      if (isTokenExpired) {
        localStorage.clear();
        return false;
      }
      return true;
    }
    return false;
  }
}
