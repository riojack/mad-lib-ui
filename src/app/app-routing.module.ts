import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMadLibComponent } from './create-mad-lib/create-mad-lib.component';
import { ViewMadLibsComponent } from './view-mad-libs/view-mad-libs.component';


const routes: Routes = [
  { path: 'create', component: CreateMadLibComponent },
  { path: 'view', component: ViewMadLibsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
