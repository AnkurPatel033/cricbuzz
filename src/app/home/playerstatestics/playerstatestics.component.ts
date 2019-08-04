import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playerstatestics',
  templateUrl: './playerstatestics.component.html',
  styleUrls: ['./playerstatestics.component.css']
})
export class PlayerstatesticsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private player_service: PlayerService,private router:Router) { }

  ngOnInit() {
   // let id=this.activatedRoute.snapshot.queryParamMap.get("playerID");
   let id=sessionStorage.getItem("playerID");
    // console.log(id);
    this.getPData(id);
  }

  playerStatus;
  getPData(id)
  {
    // console.log("invoked:"+id)
    this.player_service.getPlayerStaticsById(id)
    .subscribe(result=>
      {
        console.log(result);
        this.playerStatus=result;
        console.log(this.playerStatus)
      },error=>{console.error(error);
      });

  }
}
