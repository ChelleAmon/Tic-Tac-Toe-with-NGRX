import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { actionNextPlayer } from '../../player/store/actions/player.actions';
import { getTilesSelector } from '../store/selectors/board.selectors';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  tiles$;


  constructor(private store: Store<State>) {
    this.tiles$ = this.store.select(getTilesSelector)

   }

   nextTurn(){
     this.store.dispatch(actionNextPlayer())
   }
}
