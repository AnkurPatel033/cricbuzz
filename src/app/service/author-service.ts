import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  listOfCountryFromHttp(){
    let observable=this.http.get('https://restcountries.eu/rest/v2/all');
    console.log(observable);
    return observable;
  }

  // PlayerInfoFromHttp(){
  //   console.log("invoked PlayerInfoFromHttp() from Service...");
  //   let observable=this.http.get('https://restcountries.eu/rest/v2/all');
  //   console.log(observable);
  //   return observable;
  // }

  //  registerUserFromFE(saveUser)
  //  {
    
  //    console.log(observable);
  //    console.log("Data saved ...")
  //   return observable;
  //  }

  onSubmit(userData){
    let observable=this.http.post('http://x-workz.mj.milesweb.cloud/v1/save',userData);
    sessionStorage.setItem("userData",JSON.stringify(userData));
  }

  onRegister(){
    sessionStorage.getItem("userData");
  }
  isLogedIn=false;
  onLogin(loginData):boolean {
     console.log("Invokde from auhtor service:"+loginData.get("email").value);
    let userData: any = JSON.parse(sessionStorage.getItem("userData"));
    if (userData.email === loginData.get("email").value && userData.password === loginData.get("password").value) {
      console.log("Authenticated");
      this.isLogedIn = true;
      return true;
    }
    else {
      this.isLogedIn = false;
      return false;
    }
  }

isValidUser()
{
  console.log("invoked  is validUser from authorservice")
  return this.isLogedIn;
}


LogOut()
{
  sessionStorage.removeItem("userData");
  console.log("invoked logout..");
  this.isLogedIn = false;
  return this.isLogedIn;
}

}
