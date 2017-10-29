import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { Uppernavbar } from './components/uppernavbar/uppernavbar';
import { Welcome } from './components/welcome/welcome';
import { AppComponent } from './app.component';

import {UserRegister} from './components/register/user-register';
import {AppRouterModule} from './components/router/router.module'
import {Authentication} from './components/authentication/authentication';
import {FlashMessagesModule} from 'angular2-flash-messages/module';
import {UserService} from './_services/user.service';
import {HallService} from './_services/hall.service';
import {AuthService} from './_services/auth.service';
import { HttpModule } from '@angular/http';
import {StorageService} from './_services/storage.service';
import {UserList} from './components/userlist/userlist'
import {SearchUserService} from './_services/searchUser.service';
import {PagerService} from './_services/pager.service';
import {AddHall} from './components/hall/addhall/addhall';
import {HallList} from './components/hall/halllist/halllist';
import {Profile} from './components/profile/profile';

@NgModule({
  declarations: [
     AppComponent,
  	Welcome,
    Uppernavbar,
    UserRegister,
    Authentication,
    UserList,
    AddHall,
    HallList,
    Profile,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    HttpModule,
    AppRouterModule,
    ModalModule.forRoot()
  ],
  providers: [HallService,PagerService,SearchUserService,UserService,AuthService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
