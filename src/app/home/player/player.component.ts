import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PlayerstatesticsComponent } from '../playerstatestics/playerstatestics.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  rows:any = [];
  columns=[{prop:'pid'},{prop:'fullName'},{prop:'Action'}]
  constructor(private player_service: PlayerService,private router:Router,private dialog:MatDialog) { 
    
  }
  

  ngOnInit() { 

  }

  PlayersDetails;
  searchPlayer(playerName)
  {
    console.log("Invoked onSearch..");
    this.player_service.getPlayerByName(playerName)
    .subscribe(result=>
      {
        console.log(result);
        let d :any =result;    
        this.PlayersDetails=d.data;
        this.rows=d.data;
        console.log(this.PlayersDetails)
      }
      , error=>{console.error(error);
      });
  }
  PlayerStatus;
  playerStatus(pid)
  {
    // const dialogRef = this.dialog.open(PlayerstatesticsComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    

     console.log("invoked by id"+pid);
     this.router.navigate(["/home/playerStat"],{queryParams:{"playerID":pid}});

  }

  playerID;
  openModel(playerID)
  {
    sessionStorage.setItem("playerID",playerID);
    this.dialog.open(PlayerstatesticsComponent);
  }


  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }


}
