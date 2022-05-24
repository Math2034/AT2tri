import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conferencia',
  templateUrl: 'conferencia.page.html',
  styleUrls: ['conferencia.page.scss'],
})
export class ConferenciaPage {

  banda: string;
  album: string;
  musica: string;

  constructor(public alertController: AlertController, private rota: Router) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Parabéns!',
      message: 'Seus dados foram preenchidos! De agora em diante você é DU ROQUE!',
      buttons: ['OK']
    });
    await alert.present();
  }

  abrirPaginaHome(){
    this.rota.navigateByUrl(`/home`);
  }
}