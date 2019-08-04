import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker'

@Component({
  selector: 'app-uplcommingmatches',
  templateUrl: './uplcommingmatches.component.html',
  styleUrls: ['./uplcommingmatches.component.css']
})
export class UplcommingmatchesComponent implements OnInit {

  constructor(private player_service: PlayerService) { }

  rows= [];
  temp = [];
  columns = [{ prop: 'pid' }, { prop: 'fullName' }, { prop: 'Action' }]
  ngOnInit() {
    this.getUpCommingMatches();
  }
  upcommingmatches;
  getUpCommingMatches() {
      console.log("entered");
    this.player_service.getPlayerUpcommingMatches()
      .subscribe(resp => {
        console.log("result")
        console.log(resp);

        let d: any = resp;
        this.rows = d.data;
        this.temp = d.data;
      },err=>{
        console.log(err)
      });


  }


  filterMatchbyDate(dd) {
    //console.log(new Date(dd))
    let d: Date = new Date(dd);
    //console.log(new Date("4 August 2019"));
   // console.log("Data"+this.temp);
    this.rows = this.temp
      .filter(
        obj => new Date(obj.date).getDate() == d.getDate() &&
          new Date(obj.date).getMonth() == d.getMonth() &&
          new Date(obj.date).getFullYear() == d.getFullYear()
      );
    // this.temp.filter

  }

}



