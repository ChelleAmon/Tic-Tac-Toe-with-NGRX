import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './page/board/board.component';
import { BoardTilesComponent } from './component/board-tiles/board-tiles.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromBoard from './store/reducers/board.reducer';


@NgModule({
  declarations: [
    BoardComponent,
    BoardTilesComponent

  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromBoard.boardFeatureKey, fromBoard.reducer)
  ],
  exports: [
    BoardComponent,
    BoardTilesComponent
  ]
})
export class BoardModule { }
