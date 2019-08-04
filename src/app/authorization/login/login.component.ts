import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router,private authorService:AuthorService) { }
  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  ngOnInit() {
  }
  msg="";
 
  onLogin() {
    console.log("invoked from login component ");
    const res:boolean =this.authorService.onLogin(this.loginForm);
    
    if (res) {
       console.log("invoked from login component after authentication:"+res)
      this.router.navigate(['/home']);
    }
    else {
     console.log(this.msg="Invalid username and password");
      
    }
  }


  


}
