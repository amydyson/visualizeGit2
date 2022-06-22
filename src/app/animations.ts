import { animate, trigger, state, style, transition } from '@angular/animations';

export let fade =     trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter', [
      animate(2000)
    ]),
    transition(':leave', [
      animate(500)
    ])
  ])