import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthorService,private rout:Router) { }

  ngOnInit() {
  }

  LogOut()
  {
    this.authService.LogOut();
    this.rout.navigate(['author/login']);
    console.log("invokde...logout");
  }

}
