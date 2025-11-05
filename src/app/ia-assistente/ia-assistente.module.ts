import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IaAssistentePageRoutingModule } from './ia-assistente-routing.module';
import { IaAssistentePage } from './ia-assistente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IaAssistentePageRoutingModule
  ],
  declarations: [IaAssistentePage]
})
export class IaAssistentePageModule {}
