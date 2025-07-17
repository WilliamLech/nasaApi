import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NasaImage} from '../class/NasaImage.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NasaApi {
  private http = inject(HttpClient);

  public getImageDuJour(): Observable<NasaImage>{
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') as Observable<NasaImage>;
  }
}
