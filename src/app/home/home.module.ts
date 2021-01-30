import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatInputModule} from '@angular/material/input';
import { HomePageRoutingModule } from './home-routing.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
