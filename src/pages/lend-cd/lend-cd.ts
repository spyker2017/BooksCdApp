import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { BooksCdService } from '../../services/BooksCdService';
import { Cd } from '../../modeles/Cd';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  cd: Cd;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookcdservice: BooksCdService,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendCdPage');
  }

  ngOnInit(){

    const index = this.navParams.get('index');
    this.cd = this.bookcdservice.All_cds[index];  
  }

  dismiss(){

    this.viewCtrl.dismiss();
  }

  lendOrReturn(){

    this.cd.is_prete = !this.cd.is_prete; 
  }

}
