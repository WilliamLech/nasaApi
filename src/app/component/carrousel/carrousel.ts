import {Component, Input} from '@angular/core';
import {trigger, transition, useAnimation} from "@angular/animations";
import {fadeIn, fadeOut} from './carrousel.animation';
import {MarsImageModel} from '../../class/MarsiImage.model';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-carrousel',
  imports: [CommonModule],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
  animations: [
    trigger('carouselAnimation', [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class Carrousel {
  @Input() images: MarsImageModel[] | undefined | null;
  currentSlide = 0;

  next() {
    if(this.images != undefined){
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.images?.length ? 0 : next;
    }

  }
  prev() {
    if(this.images != undefined) {
      const previous = this.currentSlide - 1;
      this.currentSlide = previous < 0 ? this.images?.length - 1 : previous;
    }
  }
}
