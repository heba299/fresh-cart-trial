import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'products',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'categories',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'brands',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'cart',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      {
        path: 'wishlist',
        loadComponent: () => 
          import('./products/pages/products/products.component').then(m => m.ProductsComponent),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];