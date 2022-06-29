import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  boardLayout(){
   return {
      "width": "620px",
      "height": "620px",
      "margin":'4vmin 4vmin',
      "border": "2px solid white",
      "display": "flex",
      "flex-wrap": "wrap"
    }
  }

}
