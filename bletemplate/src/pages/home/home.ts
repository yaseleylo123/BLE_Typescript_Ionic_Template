import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabasePage} from '../database-page/database-page';
import {BLEConnectionPage} from '../ble-connection-page/ble-connection-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openDatabasePage(){
    this.navCtrl.push(DatabasePage);
  }

  openBLEPage(){
    this.navCtrl.push(BLEConnectionPage);
  }


}
