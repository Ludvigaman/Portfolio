import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
export class HomeComponent {

  strings: string[] = [ ' M.Sc. Information Systems and AI', ' IT-Administrator', ' ...', ' Software Developer', '<div class="mainColour">Senior Full-stack Developer</div>'];

}
