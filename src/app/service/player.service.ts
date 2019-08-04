import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }


  getPlayerByName(playerName)
  {
   return this.http.get
   ("https://cricapi.com/api/playerFinder?apikey=jzusrOk8dvelNOPQajyIWAl6h4A3&name="+playerName);
  }

  getPlayerStaticsById(pid)
  {
   return this.http.get
   ("https://cricapi.com/api/playerStats?apikey=jzusrOk8dvelNOPQajyIWAl6h4A3&pid="+pid);
  }


  getPlayerUpcommingMatches()
  {
   return this.http.get
   ("https://cricapi.com/api/matchCalendar?apikey=jzusrOk8dvelNOPQajyIWAl6h4A3");
  }

}
