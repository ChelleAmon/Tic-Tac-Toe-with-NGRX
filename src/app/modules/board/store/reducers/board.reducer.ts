import { Action, createReducer, on } from '@ngrx/store';
import { actionChangePlayerTile } from '../actions/board.actions';


export const boardFeatureKey = 'BOARD_STATE';

export interface State {
  tiles: string[]

}

export const initialState: State = {
  tiles: [...Array(9).fill('<Empty>')]
};

export const reducer = createReducer(
  initialState,


  on(actionChangePlayerTile, (state, action) => {
     const { tile, value } = action
     const TILES = [...state.tiles]
     TILES[tile] = value
     console.log('tile index', tile)
     return {...state, TILES}
  })
);
