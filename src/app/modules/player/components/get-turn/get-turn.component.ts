import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { getTurnSelector } from '../../store/selectors/player.selectors';

@Component({
  selector: 'app-get-turn',
  templateUrl: './get-turn.component.html',
  styleUrls: ['./get-turn.component.scss']
})
export class GetTurnComponent implements OnInit {

  turn$;
  constructor(private store: Store<State>) {
    this.turn$ = this.store.select(getTurnSelector)
   }

  ngOnInit(): void {
  }

  turnBlock(){
    return {
      "margin": "25px 14px",
      "background-color": "beige",
      "width": "250px",
      "height" : "100px",
      "font-family": "Arial",
      "font-size": "2.5rem"
    }
  }
}
