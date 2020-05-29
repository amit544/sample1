import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsuniversityComponent } from './osuniversity.component';

const routes: Routes = [{ path: '', component: OsuniversityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsuniversityRoutingModule { }
