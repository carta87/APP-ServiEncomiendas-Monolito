import { Component, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

  imagenes: string[] = [
    "assets/img/logos/logo.png",
    "assets/img/logos/oficina.png",
    "assets/img/logos/transporte.png"
  ];

  constructor() {}

  ngAfterViewInit(): void {

    const elems = document.querySelectorAll('.carousel');

    M.Carousel.init(elems, {
      duration: 200,
      indicators: true,
      fullWidth: true
    });

  }

}