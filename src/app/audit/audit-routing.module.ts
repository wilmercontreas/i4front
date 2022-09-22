import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditauditComponent } from './pages/editaudit/editaudit.component';
import { ListauditsComponent } from './pages/listaudits/listaudits.component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: '', component: ListauditsComponent },
      { path: 'edit/:id', component: EditauditComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }
