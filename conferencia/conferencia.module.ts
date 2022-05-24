import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferenciaPageRoutingModule } from './conferencia-routing.module';

import { ConferenciaPage } from './conferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferenciaPageRoutingModule
  ],
  declarations: [ConferenciaPage]
})
export class ConferenciaPageModule {}
