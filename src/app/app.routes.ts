import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './pages/website/layout/layout.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { PostProductComponent } from './pages/admin/post-product/post-product.component';
import { PageNotFound } from './pages/website/page-not-found/page-not-found';


export const routes: Routes = [

  // ✅ Admin Route
  {
    path: 'post/product',
    component: PostProductComponent
  },

  // ✅ Authentication Routes
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },

  // ✅ Website Layout Routes (with nested children)
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: LandingPageComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  },

  // ✅ Wildcard (Page not found)
  {
    path: '**',
    component: PageNotFound
  }
];
