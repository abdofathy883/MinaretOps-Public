// route-animations.ts
// import {
//   trigger,
//   transition,
//   style,
//   query,
//   group,
//   animate
// } from '@angular/animations';

// export const slideRight = trigger('routeAnimations', [
//   transition('* => *', [
//     query(':enter', [
//       style({
//         position: 'absolute',
//         width: '100%',
//         top: 0,
//         left: 0,
//         zIndex: 10
//       })
//     ], { optional: true }),
//     query(':leave', [
//       style({
//         width: '100%',
//         zIndex: 1
//       })
//     ], { optional: true }),

//     group([
//       query(':leave', [
//         animate('600ms ease-in-out',
//           style({ transform: 'translateX(100%)' })
//         )
//       ], { optional: true }),

//       query(':enter', [
//         style({ transform: 'translateX(-100%)' }),
//         animate('500ms ease-in-out',
//           style({ transform: 'translateX(0)' })
//         )
//       ], { optional: true })
//     ])
//   ])
// ]);
