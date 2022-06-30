import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-tiles',
  templateUrl: './board-tiles.component.html',
  styleUrls: ['./board-tiles.component.scss']
})
export class BoardTilesComponent implements OnInit {

  tiles$;
  playerTurn$;

  constructor(private boardService: BoardService) {
    this.tiles$ = this.boardService.tiles$
    this.playerTurn$ = this.boardService.playerTurn$
   }

  ngOnInit(): void {
  }

  boardLayout(){
    return {
       "width": "612px",
       "height": "612px",
       "border": "2px solid white",
       "display": "flex",
       "flex-wrap": "wrap",
     }
   }

  tileBlock(){
    return {
      "border": "2px solid white",
      "background-color": "#333",
      "width": "200px",
      "height": "200px",
      "color": "white",
      "font-size": "20px"

    }
  }

  test(tile: number, value: string){
    return this.boardService.nextTurn(tile, value)
  }

}
