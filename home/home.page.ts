import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banda: string;
  album: string;
  musica: string;
  constructor(private rota: Router) {}

  abrirPaginaConferencia(){
    this.rota.navigateByUrl(`/conferencia/$`);
  }

  abrirPaginaTeste(){
    if(!this.banda || !this.album || !this.musica){
      this.rota.navigateByUrl(`/home`);
    }
    else{
      this.rota.navigateByUrl(`/teste/${this.banda}`);
      this.rota.navigateByUrl(`/teste/${this.album}`);
      this.rota.navigateByUrl(`/teste/${this.musica}`);
    }
  }
}