import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayer from '../reducers/player.reducer';


const selectPlayerFeatureState = createFeatureSelector<fromPlayer.State>(fromPlayer.playerFeatureKey)

export const getAllPlayersSelector = createSelector(
  selectPlayerFeatureState,
  (state) => state.players
)
