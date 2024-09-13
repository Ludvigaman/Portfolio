import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
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
export class ProjectsComponent {

}
