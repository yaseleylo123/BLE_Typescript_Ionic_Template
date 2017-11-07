import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BLEConnectionPage} from '../pages/ble-connection-page/ble-connection-page';
import {BLEConnection} from '../providers/ble-connection';
import {DatabasePage} from '../pages/database-page/database-page';
import {Database} from '../providers/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BLEConnectionPage,
    DatabasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BLEConnectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLEConnection,
    Database
  ]
})
export class AppModule {}
