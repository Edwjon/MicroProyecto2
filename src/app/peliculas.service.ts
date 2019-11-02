import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './peliculas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private _url: string = "/assets/data/movies.json";

  constructor(private http: HttpClient) { }
  

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this._url);
  }
}
