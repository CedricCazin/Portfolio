import { AfterViewInit, Component } from '@angular/core';

declare class FinisherHeader {
  constructor(i: any);
}

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'web-app';

  ngAfterViewInit(): void {
    new FinisherHeader({
      count: 6,
      size: {
        min: 1100,
        max: 1300,
        pulse: 0,
      },
      speed: {
        x: {
          min: 0.1,
          max: 0.3,
        },
        y: {
          min: 0.1,
          max: 0.3,
        },
      },
      colors: {
        background: '#9138e5',
        particles: ['#6bd6ff', '#ffcb57', '#ff333d'],
      },
      blending: 'overlay',
      opacity: {
        center: 1,
        edge: 0.1,
      },
      skew: -2,
      shapes: ['c'],
    });
  }

  onClick() {
    console.log('click');
  }
}