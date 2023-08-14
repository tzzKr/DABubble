import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: MainPageHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
