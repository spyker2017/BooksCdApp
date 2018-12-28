import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { BooksCdService } from '../../services/BooksCdService';
import { Book } from '../../modeles/Book';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  book: Book;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookcdservice: BooksCdService,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendBookPage');
  }

  ngOnInit(){

    const index = this.navParams.get('index');
    this.book = this.bookcdservice.All_books[index];  
  }

  dismiss(){

    this.viewCtrl.dismiss();
  }

  lendOrReturn(){

    this.book.is_prete = !this.book.is_prete; 
  }

}
