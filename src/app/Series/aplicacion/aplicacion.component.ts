import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../Serie.service';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {

  data_series : Array<Serie> = [];
  avg : number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.data_series = series;

      this.getAvg();
    });
  }
  getAvg(): void {
    let count = 0;
    this.data_series.forEach(serie => {
      count += serie.seasons;
    });
  
    this.avg = Math.floor(count / this.data_series.length);
  }

  

  ngOnInit() {
    this.getSeries();
  }

}
