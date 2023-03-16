import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Footer3Component } from './footer3.component';
import { Home3Component } from './home3/home3.component';

const routes: Routes = [
  { path: '', component: Footer3Component },
  {path:'home3' , component:Home3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Footer3RoutingModule { }
