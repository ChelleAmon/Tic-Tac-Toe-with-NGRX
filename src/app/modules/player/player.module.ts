import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './pages/player/player.component';
import { GetPlayersComponent } from './components/get-players/get-players.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromPlayer from './store/reducers/player.reducer';



@NgModule({
  declarations: [
    PlayerComponent,
    GetPlayersComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(fromPlayer.playerFeatureKey, fromPlayer.reducer),

  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerModule { }
