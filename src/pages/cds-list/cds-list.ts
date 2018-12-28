import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BooksCdService } from '../../services/BooksCdService';
import { Cd } from '../../modeles/Cd';
import { LendCdPage } from '../lend-cd/lend-cd';

/**
 * Generated class for the CdsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cds-list',
  templateUrl: 'cds-list.html',
})
export class CdsListPage {

  cdsList: Cd[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookcdservice: BooksCdService,
    private modalCtrl: ModalController) {

      this.cdsList = this.bookcdservice.All_cds.slice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CdsListPage');
  }

  showLandCd(index: Number){

    const modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

}
