import { Component } from '@angular/core';
import {Toolbar} from '../toolbar/toolbar';
import {FormsModule} from '@angular/forms';
import {NasaApi} from '../../api/nasa.api';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MarsImageModel} from '../../class/MarsiImage.model';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mars-image',
  imports: [
    Toolbar,
    FormsModule,
    AsyncPipe,
    CarouselModule
  ],
  templateUrl: './mars-image.html',
  styleUrl: './mars-image.css'
})
export class MarsImage {
  sol: number = 1000;
  marsImage: BehaviorSubject<MarsImageModel[] | undefined> = new BehaviorSubject<MarsImageModel[] |undefined>(undefined);
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3600,
    autoplaySpeed: 2400,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor(private nasaApi: NasaApi) {
  }

  search(){
    this.getImage();
  }

  getImage(){
   this.nasaApi.getMarsImage(this.sol).subscribe(data => {
     console.log(data);
     console.log(data.photos);
      this.marsImage.next(data.photos);
   })
  }
}
