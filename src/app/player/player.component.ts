import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LibraryService } from '../library.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private isPlaying: boolean;
  private isLoaded: boolean;

  private audio: any;
  private audioData: any;
  private audioSubscription: Subscription;

  constructor(
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {
    console.log("init player");
    this.audio = new Audio();
    this.audioData = {};
    this.isPlaying = false;
    this.isLoaded = false;

    this.audioSubscription = this.libraryService.getCurrentAudioObservable()
    .subscribe(audioData => this.setPlayer(audioData));
  }

  private setPlayer(audioData: any): void {
    this.onClickPause();
    this.audioData = audioData;
    this.audio.src = this.audioData.src;
    this.audio.load();
    if (!this.audioData.src || this.audioData.src === ''){
      this.isLoaded = false;
    } else {
      this.isLoaded = true;
    }
    this.onClickPlay();
  }

  private onClickPlay():void {
    this.audio.play();
    this.isPlaying = true;
  }

  private onClickPause():void {
    this.audio.pause();
    this.isPlaying = false;
  }

  private onClickStop():void {
    this.onClickPause();
    this.audio.load();
  }

  ngOnDestroy() {
    console.log("destroy player");

    this.audio.pause();
    this.audio.src = "";
    this.audio.load();

    this.audioSubscription.unsubscribe();
  }
}
