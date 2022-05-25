import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  banda: string;
  album: string;
  musica: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.banda = this.activatedRoute.snapshot.paramMap.get('banda');
    this.album = this.activatedRoute.snapshot.paramMap.get('album');
    this.musica = this.activatedRoute.snapshot.paramMap.get('musica');
  }

}
