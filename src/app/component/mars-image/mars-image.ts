import { Component } from '@angular/core';
import {Toolbar} from '../toolbar/toolbar';
import {FormsModule} from '@angular/forms';
import {NasaApi} from '../../api/nasa.api';
import {BehaviorSubject} from 'rxjs';
import {Carrousel} from '../carrousel/carrousel';
import {AsyncPipe} from '@angular/common';
import {MarsImageModel} from '../../class/MarsiImage.model';

@Component({
  selector: 'app-mars-image',
  imports: [
    Toolbar,
    FormsModule,
    Carrousel,
    AsyncPipe
  ],
  templateUrl: './mars-image.html',
  styleUrl: './mars-image.css'
})
export class MarsImage {
  sol: number = 1000;
  marsImage: BehaviorSubject<MarsImageModel[] | undefined> = new BehaviorSubject<MarsImageModel[] |undefined>(undefined);

  constructor(private nasaApi: NasaApi) {
  }

  search(){
    this.getImage();
  }

  getImage(){
   this.nasaApi.getMarsImage(this.sol).subscribe(data => {
      this.marsImage.next(data.photos);
   })
  }
}
