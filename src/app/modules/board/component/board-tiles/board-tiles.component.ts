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

    }
  }

  test(){
    console.log('clicked')
  }

}
