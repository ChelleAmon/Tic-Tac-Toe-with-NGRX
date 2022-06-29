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

}
