import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peliculas = [];

  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getPeliculas()
      .subscribe(data => this.peliculas = data);
  }

}
