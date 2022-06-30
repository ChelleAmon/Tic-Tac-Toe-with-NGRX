import { createAction, props } from '@ngrx/store';

export const actionChangePlayerTile = createAction(
  '[Board] Change Player Tile',
  props<{tile: number, value: string}>()
);




