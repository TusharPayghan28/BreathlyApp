import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Footer3RoutingModule } from './footer3-routing.module';
import { Footer3Component } from './footer3.component';
import { Footer4Component } from './footer4/footer4.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';

@NgModule({
  declarations: [
    Footer3Component,
    Footer4Component,
    Home2Component,
    Home3Component
  ],
  imports: [
    CommonModule,
    Footer3RoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class Footer3Module { }
