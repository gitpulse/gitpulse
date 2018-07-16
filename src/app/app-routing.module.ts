import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}