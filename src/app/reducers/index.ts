import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBoard from '../modules/board/store/reducers/board.reducer';
import * as fromPlayer from '../modules/player/store/reducers/player.reducer';


export interface State {

  [fromBoard.boardFeatureKey]: fromBoard.State;
  [fromPlayer.playerFeatureKey]: fromPlayer.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromBoard.boardFeatureKey]: fromBoard.reducer,
  [fromPlayer.playerFeatureKey]: fromPlayer.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
