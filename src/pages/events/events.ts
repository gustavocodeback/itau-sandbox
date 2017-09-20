import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare const FB;

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  // dispara ao carregar
  public carregou: any = false;

  /**
   * constructor
   * 
   * método constructor
   * 
   * @param navCtrl 
   * @param navParams 
   */
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams ) {
  }

  /**
   * ionViewDidEnter
   * 
   * Registra o evento quando o usuário entrar na tela
   * 
   */
  public ionViewDidEnter() {

    // adiciona o evento ao facebook
    if ( typeof FB != undefined ) {

      // dispara o evento
      FB.AppEvents.logEvent( "ENTROU EVENTS PAGE" );

      // seta a mensagem
      this.carregou = 'Disparamos um evento informando que está página foi carregada.';
    }
  }

  /**
   * onClickEvent
   * 
   * Dispara o evento no facebook para cliques
   * 
   * @param title 
   */
  public onClickEvent( title: string ) {

    // verifica se existe o FB
    if ( typeof FB != undefined ) {

      // registra o event
      FB.AppEvents.logEvent( title );

      // seta a mensagem
      this.carregou = "Disparamos o evento de clique no botão";
    }
  }
}
/* end of file */