import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IaAssistentePage } from './ia-assistente.page';

const routes: Routes = [
  {
    path: '',
    component: IaAssistentePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaAssistentePageRoutingModule {}
