import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { ListauditsComponent } from './pages/listaudits/listaudits.component';
import { EditauditComponent } from './pages/editaudit/editaudit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListauditsComponent,
    EditauditComponent
  ],
  imports: [
    CommonModule,
    AuditRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuditModule { }
