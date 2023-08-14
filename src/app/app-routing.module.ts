import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';

const routes: Routes = [
  {path: 'home', component: MainPageHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
