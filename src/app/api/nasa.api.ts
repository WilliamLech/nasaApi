import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NasaImage} from '../class/NasaImage.model';
import {Observable} from 'rxjs';
import {MarsImageModel} from '../class/MarsiImage.model';
import {MarsPhoto} from '../class/MarsPhoto.model';

@Injectable({providedIn: 'root'})
export class NasaApi {
  private http = inject(HttpClient);

  public getImageDuJour(): Observable<NasaImage>{
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') as Observable<NasaImage>;
  }

  public getMarsImage(sol: number): Observable<MarsPhoto>{
    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + sol +'&page=1&api_key=DEMO_KEY') as Observable<MarsPhoto>;
  }
}
