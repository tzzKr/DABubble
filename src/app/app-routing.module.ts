import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChooseAvatarComponent } from './auth/choose-avatar/choose-avatar.component';
import { PasswortResetComponent } from './auth/passwort-reset/passwort-reset.component';
import { HomeWorkspacesComponent } from './layout/home-workspaces/home-workspaces.component';
import { BackgroundContainerComponent } from './layout/background-container/background-container.component';

const routes: Routes = [
  {path: '', component: BackgroundContainerComponent },
  {path: 'login', component: LoginComponent },
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
