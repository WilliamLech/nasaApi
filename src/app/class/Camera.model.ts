export class Camera {
  private _id: number | undefined;
  private _name: string | undefined;
  private _rover_id: number | undefined;
  private _full_name: string | undefined;

  constructor(id?: number, name?: string, rover_id?: number, full_name?: string) {
    this._id = id;
    this._name = name;
    this._rover_id = rover_id;
    this._full_name = full_name;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get rover_id(): number | undefined {
    return this._rover_id;
  }

  set rover_id(value: number | undefined) {
    this._rover_id = value;
  }

  get full_name(): string | undefined {
    return this._full_name;
  }

  set full_name(value: string | undefined) {
    this._full_name = value;
  }
}
