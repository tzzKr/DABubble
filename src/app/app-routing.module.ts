import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChooseAvatarComponent } from './auth/choose-avatar/choose-avatar.component';
import { PasswortResetComponent } from './auth/passwort-reset/passwort-reset.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: MainPageHeaderComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-up/choose-avatar', component: ChooseAvatarComponent},
  {path: 'reset-password', component: PasswortResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
