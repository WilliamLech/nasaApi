export class NasaImage {
  private _date: Date | undefined;
  private _explanation: string | undefined;
  private _hdurl: string | undefined;
  private _media_type: string | undefined;
  private _service_version: string | undefined;
  private _title: string | undefined;
  private _url: string | undefined;


  constructor(date?: Date, explanation?: string, hdurl?: string, media_type?: string, service_version?: string, title?: string, url?: string) {
    this._date = date;
    this._explanation = explanation;
    this._hdurl = hdurl;
    this._media_type = media_type;
    this._service_version = service_version;
    this._title = title;
    this._url = url;
  }


  get date(): Date | undefined {
    return this._date;
  }

  set date(value: Date | undefined) {
    this._date = value;
  }

  get explanation(): string | undefined {
    return this._explanation;
  }

  set explanation(value: string | undefined) {
    this._explanation = value;
  }

  get hdurl(): string | undefined {
    return this._hdurl;
  }

  set hdurl(value: string | undefined) {
    this._hdurl = value;
  }

  get media_type(): string | undefined {
    return this._media_type;
  }

  set media_type(value: string | undefined) {
    this._media_type = value;
  }

  get service_version(): string | undefined {
    return this._service_version;
  }

  set service_version(value: string | undefined) {
    this._service_version = value;
  }

  get title(): string | undefined {
    return this._title;
  }

  set title(value: string | undefined) {
    this._title = value;
  }

  get url(): string | undefined {
    return this._url;
  }

  set url(value: string | undefined) {
    this._url = value;
  }
}
