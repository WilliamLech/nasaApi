import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {NasaApi} from '../../api/nasa.api';
import {BehaviorSubject, first} from 'rxjs';
import {NasaImage} from '../../class/NasaImage.model';
import {AsyncPipe} from '@angular/common';
import {Toolbar} from '../toolbar/toolbar';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    Toolbar,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  nasaImage: BehaviorSubject<NasaImage | undefined> = new BehaviorSubject<NasaImage |undefined>(undefined);

  constructor(private nasaApi: NasaApi) {
    this.getNasaAPiImage();
  }

  public getNasaAPiImage(){
    this.nasaApi.getImageDuJour().pipe(first()).subscribe(data => {
      console.log(data);
      this.nasaImage.next(data);
    })
  }
}
