import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'Toc', loadChildren: () => import('./toc/toc.module').then(m => m.TocModule) }, 
  { path: 'OS', loadChildren: () => import('./operatingsystem/operatingsystem.module').then(m => m.OperatingsystemModule) },
  { path: 'Tocuniversity', loadChildren: () => import('./tocuniversity/tocuniversity.module').then(m => m.TocuniversityModule) },
  { path: 'osuniversity', loadChildren: () => import('./osuniversity/osuniversity.module').then(m => m.OsuniversityModule) },
  { path: 'cquiz', loadChildren: () => import('./cquiz/cquiz.module').then(m => m.CquizModule) },
  { path: 'c', loadChildren: () => import('./c/c.module').then(m => m.CModule) },
  { path: 'datastructure', loadChildren: () => import('./datastructure/datastructure.module').then(m => m.DatastructureModule) },
  { path: 'aptitude', loadChildren: () => import('./aptitude/aptitude.module').then(m => m.AptitudeModule) },
  { path: 'Aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'gatesyllbous', loadChildren: () => import('./gatesyllbous/gatesyllbous.module').then(m => m.GatesyllbousModule) },
  { path: "**",component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
