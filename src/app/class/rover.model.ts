export class Rover {
  private _name: string | undefined;
  private _landing_date: string | undefined;
  private _launch_date: string | undefined;
  private _status: string | undefined;
  private _id: number | undefined;

  constructor(name?: string, landing_date?: string, launch_date?: string, status?: string, id?: number) {
    this._name = name;
    this._landing_date = landing_date;
    this._launch_date = launch_date;
    this._status = status;
    this._id = id;
  }


  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get landing_date(): string | undefined {
    return this._landing_date;
  }

  set landing_date(value: string | undefined) {
    this._landing_date = value;
  }

  get launch_date(): string | undefined {
    return this._launch_date;
  }

  set launch_date(value: string | undefined) {
    this._launch_date = value;
  }

  get status(): string | undefined {
    return this._status;
  }

  set status(value: string | undefined) {
    this._status = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }
}
