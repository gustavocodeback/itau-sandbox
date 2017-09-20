import { EventsPage } from './../events/events';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * constructor
   * 
   * método construtor
   * 
   * @param navCtrl 
   */
  constructor( public navCtrl: NavController ) {
  }

  /**
   * openEventsPage
   * 
   * abre a página de eventos
   * 
   */
  public openEventsPage() {
    this.navCtrl.push( EventsPage );
  }
}

/* end of file */
