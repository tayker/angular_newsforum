import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { DataService } from './data.service';

const routes = [
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'mainpage', component: NewsComponent },
    { path: 'registration', component: RegistrationComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NewsComponent,
    NewsItemComponent,
    LoginComponent,
    UserPanelComponent,
    RegistrationComponent,
    UserActivityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
