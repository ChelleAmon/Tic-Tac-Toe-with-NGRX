import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoard from '../reducers/board.reducer'

const selectBoardFeatureState = createFeatureSelector<fromBoard.State>(fromBoard.boardFeatureKey)

export const getTilesSelector = createSelector(
  selectBoardFeatureState,
  (state) => state.tiles
)
