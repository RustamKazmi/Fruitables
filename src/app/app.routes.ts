import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './pages/website/layout/layout.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';

export const routes: Routes = [
    {
       path:'',
       pathMatch:'full',
       redirectTo:'login'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:LandingPageComponent
            }
        ]
    }
    
];
