import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChooseAvatarComponent } from './auth/choose-avatar/choose-avatar.component';
import { PasswortResetComponent } from './auth/passwort-reset/passwort-reset.component';
<<<<<<< HEAD
import { ThreadChatContainerComponent } from './layout/right-chat-box/thread-chat-container/thread-chat-container.component';
=======
import { HomeWorkspacesComponent } from './layout/home-workspaces/home-workspaces.component';
import { BackgroundContainerComponent } from './layout/background-container/background-container.component';
>>>>>>> 154e4f09502743a74ad7ce6ecc3123071c05f081

const routes: Routes = [
  {path: '', component: BackgroundContainerComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: MainPageHeaderComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-up/choose-avatar', component: ChooseAvatarComponent},
  {path: 'reset-password', component: PasswortResetComponent},
  {path: 'right-chat', component: ThreadChatContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
