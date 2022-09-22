import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountsRoutingModule } from './accounts-routing.module';
import { ListusersComponent } from './pages/listusers/listusers.component';
import { ListpostsComponent } from './pages/listposts/listposts.component';
import { ListphotosComponent } from './pages/listphotos/listphotos.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ListusersComponent,
    ListpostsComponent,
    ListphotosComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    RouterModule
  ]
})
export class AccountsModule { }
