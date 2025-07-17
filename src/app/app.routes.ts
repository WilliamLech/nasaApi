import { Routes } from '@angular/router';
import {Home} from './component/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'marsImage',
    loadComponent: () => import('./component/mars-image/mars-image').then(m => m.MarsImage)
  }
];
