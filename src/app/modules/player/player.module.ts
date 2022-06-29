import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './pages/player/player.component';
import { GetPlayersComponent } from './components/get-players/get-players.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlayerComponent,
    GetPlayersComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

  ],
  exports: [
    PlayerComponent,
  ]
})
export class PlayerModule { }
