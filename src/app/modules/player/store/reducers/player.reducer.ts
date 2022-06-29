import { Action, createReducer, on } from '@ngrx/store';
import { actionNextPlayer } from '../actions/player.actions';


export const playerFeatureKey = 'PLAYER_STATE';

export interface State {
  players: string[],
  turn: "X" | "O"

}

export const initialState: State = {
  players: [ 'X', 'O' ],
  turn: "X"

};

export const reducer = createReducer(
  initialState,

  on(actionNextPlayer, (state, action) => {
    return {...state,
      turn: state.turn === "X" ?  "O" : "X"
    }
  })

);
