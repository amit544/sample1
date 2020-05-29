import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocuniversityComponent } from './tocuniversity.component';

const routes: Routes = [{ path: '', component: TocuniversityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TocuniversityRoutingModule { }
