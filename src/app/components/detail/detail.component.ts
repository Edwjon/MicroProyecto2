import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/peliculas.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private peliculasService:PeliculasService) { }

  id:string;
  public peliculas = [];


  ngOnInit() {

    this.peliculasService.getPeliculas()
      .subscribe(data => this.peliculas = data);

    let idd = this.route.snapshot.params['id'];
    this.id = idd;

  }

}
