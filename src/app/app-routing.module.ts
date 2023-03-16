import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { BodyComponent } from './body/body.component';
import { DarkComponent } from './dark/dark.component';
import { DisturbComponent } from './disturb/disturb.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { MeditationComponent } from './meditation/meditation.component';
import { MelodiesComponent } from './melodies/melodies.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PlaysongComponent } from './playsong/playsong.component';
import { PolicyComponent } from './policy/policy.component';
import { RelaxComponent } from './relax/relax.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SettingComponent } from './setting/setting.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SleepDilogComponent } from './sleep-dilog/sleep-dilog.component';
import { SleepComponent } from './sleep/sleep.component';
import { SongComponent } from './song/song.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'' , component:SignupComponent},
  {path:'login' , component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'start', component:StartpageComponent},
  {path:'home' , component:HomeComponent},
  {path:'body' , component:BodyComponent},
  {path:'footer' , component:FooterComponent},
  {path:'song' , component:SongComponent},
  {path:'image' , component:ImageComponent},
  {path:'sleep' , component:SleepComponent},
  {path:'meditation' , component:MeditationComponent},
  {path:'relax' , component:RelaxComponent},
  {path:'setting' , component:SettingComponent},
  {path:'home2' , component:Home2Component},
  {path:'melodies' , component:MelodiesComponent},
  { path: 'footer3', loadChildren: () => import('./footer3/footer3.module').then(m => m.Footer3Module) },
  {path:'playsong' , component:PlaysongComponent},
  {path:'sleepdilog' , component:SleepDilogComponent},
  {path:'account' , component:AccountComponent},
  {path:'policy' , component:PolicyComponent},
  {path:'terms' , component:TermsComponent},
  {path:'manage', component:ManageComponent},
  {path:'reminders' , component:RemindersComponent},
  {path:'about' , component:AboutComponent},
  {path:'download' , component:DownloadComponent},
  {path:'dark', component:DarkComponent},
  {path:'support', component:SupportComponent},
  {path:'disturb', component:DisturbComponent},
  {path:'notifications' , component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
