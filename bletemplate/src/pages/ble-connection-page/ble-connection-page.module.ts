import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BLEConnectionPage } from './ble-connection-page';

@NgModule({
  declarations: [
    BLEConnectionPage,
  ],
  imports: [
    IonicPageModule.forChild(BLEConnectionPage),
  ],
})
export class BLEConnectionPageModule {}
