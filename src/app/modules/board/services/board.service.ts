import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { actionNextPlayer } from '../../player/store/actions/player.actions';
import { getPlayersTurnSelector } from '../../player/store/selectors/player.selectors';
import { actionChangePlayerTile } from '../store/actions/board.actions';
import { getTilesSelector } from '../store/selectors/board.selectors';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  tiles$;
  playerTurn$;


  constructor(private store: Store<State>) {
    this.tiles$ = this.store.select(getTilesSelector)
    this.playerTurn$ = this.store.select(getPlayersTurnSelector)

   }

   nextTurn(tile: number, value: string){
    this.store.dispatch(actionChangePlayerTile({tile, value}))
    this.store.dispatch(actionNextPlayer())
   }
}
