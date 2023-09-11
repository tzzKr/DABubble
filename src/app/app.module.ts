import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UserprofilePopUpComponent } from './shared/components/userprofile-pop-up/userprofile-pop-up.component';
import { MainPageHeaderComponent } from './layout/main-page-header/main-page-header.component';
import { IntroComponent } from './auth/intro/intro.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './core/services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderLogoComponent } from './auth/header-logo/header-logo.component';
import { AuthBottomComponent } from './auth/auth-bottom/auth-bottom.component';
import { ChooseAvatarComponent } from './auth/choose-avatar/choose-avatar.component';
import { PasswortResetComponent } from './auth/passwort-reset/passwort-reset.component';
<<<<<<< HEAD
import { OverlayComponent } from './layout/overlay/overlay.component';
import { WirteTextBoxComponent } from './layout/right-chat-box/wirte-text-box/wirte-text-box.component';
import { ThreadChatContainerComponent } from './layout/right-chat-box/thread-chat-container/thread-chat-container.component';
=======
import { HomeWorkspacesComponent } from './layout/home-workspaces/home-workspaces.component';
import { BackgroundContainerComponent } from './layout/background-container/background-container.component';
>>>>>>> 154e4f09502743a74ad7ce6ecc3123071c05f081

@NgModule({
  declarations: [
    AppComponent,
    UserprofilePopUpComponent,
    MainPageHeaderComponent,
    IntroComponent,
    LoginComponent,
    SignUpComponent,
    HeaderLogoComponent,
    AuthBottomComponent,
    ChooseAvatarComponent,
    PasswortResetComponent,
<<<<<<< HEAD
    OverlayComponent,
    WirteTextBoxComponent,
    ThreadChatContainerComponent,
=======
    HomeWorkspacesComponent,
    BackgroundContainerComponent,
>>>>>>> 154e4f09502743a74ad7ce6ecc3123071c05f081

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
AuthService,
AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
