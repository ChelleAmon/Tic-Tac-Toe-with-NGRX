import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './page/board/board.component';
import { BoardTilesComponent } from './component/board-tiles/board-tiles.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BoardComponent,
    BoardTilesComponent

  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule
  ],
  exports: [
    BoardComponent,
    BoardTilesComponent
  ]
})
export class BoardModule { }
