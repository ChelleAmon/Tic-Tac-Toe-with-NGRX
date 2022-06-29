import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-tiles',
  templateUrl: './board-tiles.component.html',
  styleUrls: ['./board-tiles.component.scss']
})
export class BoardTilesComponent implements OnInit {

  tiles$;
  constructor(private boardService: BoardService) {
    this.tiles$ = this.boardService.tiles$
   }

  ngOnInit(): void {
  }

}
