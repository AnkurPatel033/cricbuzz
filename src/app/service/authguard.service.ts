import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginComponent } from '../authorization/login/login.component';
import { AuthorService } from './author-service';



@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private authService:AuthorService){ }

  
  canActivate() {
   if(this.authService.isValidUser())
      {
        console.log("Valid user...");
        return true;
       }
       else{
         console.log("Invalid user...");
    return false; 
  }
  }
}