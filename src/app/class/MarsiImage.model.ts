import {Camera} from './Camera.model';
import {Rover} from './rover.model';

export class MarsImageModel {
  private _id: number | undefined;
  private _sol: number | undefined;
  private _camera: Camera | undefined;
  private _img_src: string | undefined;
  private _earth_date: string | undefined;
  private _rover: Rover | undefined;

  constructor(id?: number, sol?: number, camera?: Camera, img_src?: string, earth_date?: string, rover?: Rover) {
    this._id = id;
    this._sol = sol;
    this._camera = camera;
    this._img_src = img_src;
    this._earth_date = earth_date;
    this._rover = rover;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get sol(): number | undefined {
    return this._sol;
  }

  set sol(value: number | undefined) {
    this._sol = value;
  }

  get camera(): Camera | undefined {
    return this._camera;
  }

  set camera(value: Camera | undefined) {
    this._camera = value;
  }

  get img_src(): string | undefined {
    return this._img_src;
  }

  set img_src(value: string | undefined) {
    this._img_src = value;
  }

  get earth_date(): string | undefined {
    return this._earth_date;
  }

  set earth_date(value: string | undefined) {
    this._earth_date = value;
  }

  get rover(): Rover | undefined {
    return this._rover;
  }

  set rover(value: Rover | undefined) {
    this._rover = value;
  }
}
