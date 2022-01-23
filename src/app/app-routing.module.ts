import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'products-by-categories',
    loadChildren: () => import('./pages/products-by-categories/products-by-categories.module').then( m => m.ProductsByCategoriesPageModule)
  },
  {
    path: 'commerces-by-products',
    loadChildren: () => import('./pages/commerces-by-products/commerces-by-products.module').then( m => m.CommercesByProductsPageModule)
  },
  {
    path: 'commerce-product-detail',
    loadChildren: () => import('./pages/commerce-product-detail/commerce-product-detail.module')
    .then( m => m.CommerceProductDetailPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
