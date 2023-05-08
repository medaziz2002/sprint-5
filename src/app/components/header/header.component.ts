
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  taille!:number;
   
  id!:number;
 constructor(
   private tokenService: TokenService,
   private router: Router
 ) {}




 ngOnInit(): void {
  
 }

 get userName(): string {
   return this.tokenService.getUsername;
 }

 get role() {
   return this.tokenService.userRole;
 }

 logout() {
   this.tokenService.cleanup();
   this.router.navigate(['/']);
 }

 


}
