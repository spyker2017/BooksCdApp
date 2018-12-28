import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Book } from '../../modeles/Book';
import { BooksCdService } from '../../services/BooksCdService';
import { LendBookPage } from '../lend-book/lend-book';

/**
 * Generated class for the BooksListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html',
})
export class BooksListPage {

  booksList: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private bookcdservice: BooksCdService,
    private modalCtrl: ModalController) {
   
    this.booksList = this.bookcdservice.All_books.slice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksListPage');
  }

  showLandBook(index: number){

    const modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();

    
  }

}
