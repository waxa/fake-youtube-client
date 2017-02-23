import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-lista-actual',
  templateUrl: './lista-actual.component.html',
  styleUrls: ['./lista-actual.component.css']
})
export class ListaActualComponent implements OnInit {

  private listAudios: any[];
  private listAudiosSubscription: Subscription;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    console.log("init listaActual");
    this.listAudios = [];
    this.listAudiosSubscription = this.libraryService.getCurrentListAudioObservable()
    .subscribe(listAudios => this.onSubscriptionListAudios(listAudios));

    this.libraryService.addCurrentListAudio({
      titulo: 'sons of aguirre noseq',
      src: 'http://localhost:27042/media/112_43JYMlU.mp3'
    });
    this.libraryService.addCurrentListAudio({
      titulo: 'tu estas bautizada',
      src: 'http://localhost:27042/media/oZF30U5mxKU.mp3'
    });
  }

  private onSubscriptionListAudios(listAudios: any[]): void {
    this.listAudios = listAudios;
    if (this.listAudios.length === 0) {
      this.onClickAudio({titulo:'Ninguna cancion seleccionada', src: ''})
    }
  }

  private onClickAudio(audio: any): void {
    this.libraryService.setCurrentAudio(audio);
  }

  private onClickRemoveAudio(audio: any): void {
    this.libraryService.removeCurrentListAudio(audio);
  }

  ngOnDestroy() {
    console.log("destroy listaActual");
    this.listAudiosSubscription.unsubscribe();
  }

}
