import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StartpageComponent } from './startpage/startpage.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { BodyComponent } from './body/body.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { SongComponent } from './song/song.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { Header2Component } from './header2/header2.component';
import { ImageComponent } from './image/image.component';
import { Footer2Component } from './footer2/footer2.component';
import { SleepComponent } from './sleep/sleep.component';
import { MeditationComponent } from './meditation/meditation.component';
import { RelaxComponent } from './relax/relax.component';
import { SettingComponent } from './setting/setting.component';
import { Home2Component } from './home2/home2.component';
import { SleepDilogComponent } from './sleep-dilog/sleep-dilog.component';
import { MeditationDilogComponent } from './meditation-dilog/meditation-dilog.component';
import { MelodiesComponent } from './melodies/melodies.component';
import { PlaysongComponent } from './playsong/playsong.component';
import { StylingDirective } from './styling.directive';
import {MatExpansionModule} from '@angular/material/expansion';
import { AccountComponent } from './account/account.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';
import { ManageComponent } from './manage/manage.component';
import { RemindersComponent } from './reminders/reminders.component';
import { AboutComponent } from './about/about.component';
import { DownloadComponent } from './download/download.component';
import { DarkComponent } from './dark/dark.component';
import { SupportComponent } from './support/support.component';
import { DisturbComponent } from './disturb/disturb.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SigninComponent,
    StartpageComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SongComponent,
    Header2Component,
    ImageComponent,
    Footer2Component,
    SleepComponent,
    MeditationComponent,
    RelaxComponent,
    SettingComponent,
    Home2Component,
    SleepDilogComponent,
    MeditationDilogComponent,
    MelodiesComponent,
    PlaysongComponent,
    StylingDirective,
    AccountComponent,
    PolicyComponent,
    TermsComponent,
    ManageComponent,
    RemindersComponent,
    AboutComponent,
    DownloadComponent,
    DarkComponent,
    SupportComponent,
    DisturbComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    SocialLoginModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '746626642516-9af24t5m5fm8l96psrnbcadlr17neirn.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
