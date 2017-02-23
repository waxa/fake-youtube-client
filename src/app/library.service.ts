import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LibraryService {

  private currentAudio: any;
  private currentAudioSubject: Subject<any>;

  private currentListAudio: any[];
  private currentListAudioSubject: Subject<any[]>;

  constructor() {
    this.currentAudio = "";
    this.currentAudioSubject = new Subject();

    this.currentListAudio = [];
    this.currentListAudioSubject = new Subject();
  }

  public getCurrentAudioObservable(): Observable<any> {
    this.currentAudioSubject.next(this.currentAudio);
    return this.currentAudioSubject;
  }

  public setCurrentAudio(audio: any): void {
    this.currentAudio = audio;
    this.currentAudioSubject.next(this.currentAudio);
  }

  public getCurrentListAudioObservable(): Observable<any[]> {
    this.currentListAudioSubject.next(this.currentListAudio);
    return this.currentListAudioSubject;
  }

  public addCurrentListAudio(audio: any): void {
    if (this.currentListAudio.indexOf(audio) === -1) {
      this.currentListAudio.push(audio);
      this.currentListAudioSubject.next(this.currentListAudio);
    }
  }

  public removeCurrentListAudio(audio: any): void {
    if (this.currentListAudio.length > 1 &&
    this.currentListAudio.indexOf(audio) === this.currentListAudio.indexOf(this.currentAudio)) {
      if (this.currentListAudio.indexOf(audio) + 1 === this.currentListAudio.length){
        this.setCurrentAudio(this.currentListAudio[0]);
      } else {
        this.setCurrentAudio(this.currentListAudio[this.currentListAudio.indexOf(audio) + 1]);
      }
    }
    this.currentListAudio.splice(this.currentListAudio.indexOf(audio),1);
    this.currentListAudioSubject.next(this.currentListAudio);
  }

}
