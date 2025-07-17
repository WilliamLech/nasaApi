import {MarsImageModel} from './MarsiImage.model';

export class MarsPhoto {
  private _photos: MarsImageModel[] | undefined;

  constructor(photos?: MarsImageModel[]) {
    this._photos = photos;
  }


  get photos(): MarsImageModel[] | undefined {
    return this._photos;
  }

  set photos(value: MarsImageModel[] | undefined) {
    this._photos = value;
  }
}
