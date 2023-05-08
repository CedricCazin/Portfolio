import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FloatingContentPathModule } from '../floating-game/floating-game.module';
import { GamesComponent } from './games.component';
import { remoteRoutes } from './games.routes';
import { SafeUrlPipe } from '../shared/safe-url.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GamesComponent, SafeUrlPipe,],
  imports: [FloatingContentPathModule, HttpClientModule, CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class GamesModule { }
