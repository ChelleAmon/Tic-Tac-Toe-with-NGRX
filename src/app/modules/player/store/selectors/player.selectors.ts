import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayer from '../reducers/player.reducer';


const selectPlayerFeatureState = createFeatureSelector<fromPlayer.State>(fromPlayer.playerFeatureKey)

export const getAllPlayersSelector = createSelector(
  selectPlayerFeatureState,
  (state) => state.players
)

export const getTurnSelector = createSelector(
  selectPlayerFeatureState,
  (state) => state.turn
)

export const getPlayersTurnSelector = createSelector(
  getAllPlayersSelector,
  getTurnSelector,
  (players, turn) => {
    const index = players.findIndex(player => player == turn)
    console.log("players turn:", players[index])
    return players[index]
  }
)

