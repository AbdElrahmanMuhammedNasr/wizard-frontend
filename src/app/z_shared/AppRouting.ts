import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdsComponent} from '../ads/ads.component';
import {AddAdComponent} from '../add-ad/add-ad.component';
import {ArchiveComponent} from '../archive/archive.component';


const routes: Routes = [
  {path: '',  redirectTo: 'myads', pathMatch: 'full'},
  {path: 'myads', component: AdsComponent},
  {path: 'addnewad', component: AddAdComponent},
  {path: 'archive', component: ArchiveComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
