import { Action, createReducer, on } from '@ngrx/store';


export const boardFeatureKey = 'BOARD_STATE';

export interface State {
  tiles: string[]

}

export const initialState: State = {
  tiles: [...Array(9).fill('*')]
};

export const reducer = createReducer(
  initialState,

);
