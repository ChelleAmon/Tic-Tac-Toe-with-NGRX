import { Action, createReducer, on } from '@ngrx/store';


export const playerFeatureKey = 'PLAYER_STATE';

export interface State {
  players: string[],

}

export const initialState: State = {
  players: [ 'X', 'O' ],

};

export const reducer = createReducer(
  initialState,

);
