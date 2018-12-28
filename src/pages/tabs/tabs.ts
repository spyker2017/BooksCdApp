import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksListPage } from '../books-list/books-list';
import { CdsListPage } from '../cds-list/cds-list';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  bookPage = BooksListPage;
  cdPage = CdsListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
