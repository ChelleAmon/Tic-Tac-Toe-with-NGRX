import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { getAllPlayersSelector } from '../store/selectors/player.selectors';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players$;

  constructor(private store: Store<State>) {

    this.players$ = this.store.select(getAllPlayersSelector)

   }

   
}
