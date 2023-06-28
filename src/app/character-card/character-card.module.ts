import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterCardPageRoutingModule } from './character-card-routing.module';

import { CharacterCardPage } from './character-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterCardPageRoutingModule
  ],
  declarations: [CharacterCardPage]
})
export class CharacterCardPageModule {}
