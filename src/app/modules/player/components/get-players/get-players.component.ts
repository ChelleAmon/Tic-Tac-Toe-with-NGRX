import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-get-players',
  templateUrl: './get-players.component.html',
  styleUrls: ['./get-players.component.scss']
})
export class GetPlayersComponent implements OnInit {

  players$;
  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.players$
  }

  ngOnInit(): void {
  }


  playerBlock(){
    return {
      "background-color": "lightyellow",
      "width": "250px",
      "height": "200px",
      "margin": "25px 12px",
      "color": "blue",
      "font-family": "Helvetica",
      "font-size" : "1.5rem"
    }
  }
}
