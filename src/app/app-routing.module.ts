import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'audits', 
    loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule)
  },
  {
    path: 'accounts', 
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  { 
    path: '**', 
    redirectTo: 'accounts' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
