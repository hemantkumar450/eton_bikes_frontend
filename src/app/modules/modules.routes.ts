import { Routes } from '@angular/router';
import { AuthGuard } from './../core/guards/auth.guard';
import { routes as STATIC_PAGES_ROUTES } from './static-pages/static-pages.routes';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  ...STATIC_PAGES_ROUTES
];
