import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { MissingTranslationStrategy } from '@angular/core';

export let fade =     trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter', [
      animate(500)
    ]),
    transition(':leave', [
      animate(100)
    ])
  ])


  export let myTrigger2 =     trigger('myTrigger2', [
    state('small', style({
      transform: 'scale(1)'
    })),
    state('large', style({
      transform: 'scale(1.7)'
    })),
    transition('large <=> small', animate('500ms'))
  ])

  export let fade2 = trigger('fade2', [
    state('fadeIn', style({
      opacity: '1',
    })),
    transition('void => *',[
      style({
        opacity: '0',
        transform: 'translateX(100px)'
      }), 
      animate('3000ms 0s ease-out')
    ])
  ])

  export let ani3 = trigger('ani3', [
    state('ani3', style({
      opacity: '1',
      transform: 'translateX(120px)'
    })),
    transition('void => *',[
      animate(50000, keyframes([
        style({opacity: 0, offset: 0}),
        style({opacity: .5, offset: .3, transform: 'translateX(0px)'}),
        style({opacity: 1, offset: .4, transform: 'translateX(0px)'}),
        style({opacity: 1, offset: .5, transform: 'translateX(50px)'}),
        style({opacity: 1, offset: .6, transform: 'translateX(70px)'}),
        style({opacity: 1, offset: .7, transform: 'translateX(80px)'}),
        style({opacity: 1, offset: .8, transform: 'translateX(90px)'}),
        style({opacity: 1, offset: .9, transform: 'translateX(100px)' }),
        style({opacity: 1, offset: 1, transform: 'translateX(120px)' }),
      ]))
    ])
  ])