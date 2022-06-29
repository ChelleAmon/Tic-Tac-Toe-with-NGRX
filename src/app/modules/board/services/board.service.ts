import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { getTilesSelector } from '../store/selectors/board.selectors';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  tiles$;

  constructor(private store: Store<State>) {
    this.tiles$ = this.store.select(getTilesSelector)
   }
}
