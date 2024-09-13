import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s', style({ opacity: 1 })) // 1 second delay, 1 second fade-in
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })) // 1 second fade-out
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  splashVisible = false;
  mainVisible = true;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.splashVisible = true;
    //   setTimeout(() => {
    //     this.splashVisible = false;
    //     setTimeout(() => {
    //       this.mainVisible = true;
    //     }, 1000)
    //   }, 3000); // How long the splash stays
    // }, 2000); // Initial delay
  }
}
