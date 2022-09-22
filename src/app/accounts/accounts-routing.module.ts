import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListphotosComponent } from './pages/listphotos/listphotos.component';
import { ListpostsComponent } from './pages/listposts/listposts.component';
import { ListusersComponent } from './pages/listusers/listusers.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: 'users', component: ListusersComponent },
      { path: 'posts', component: ListpostsComponent },
      { path: 'photos', component: ListphotosComponent },
      { path: '**', redirectTo: '' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
