import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { WrapperComponent } from './Wrapper.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserComponent } from './user/user.component';
import { User1Component } from './user/user1.component';

const routes: Routes = [
  // {path:'about',component:AboutComponent},
  // {path:'contact',component:ContactComponent},
  // {path:'login',component:LoginComponent},
  // {path:'signup',component:SignupComponent},
  // {path:'',component:HomeComponent},
  {
    path: 'about', component: WrapperComponent,
    children: [{ path: '', component: AboutComponent }]
  },
  {
    path: 'contact', component: WrapperComponent,
    children: [{ path: '', component: ContactComponent }]
  },
  {
    path: '', component: WrapperComponent,
    children: [{ path: '', component: HomeComponent }]
  },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignupComponent }]
  },
  {
    path: 'login', component: User1Component,
    children: [{ path: '', component: LoginComponent }]
  },
  // {
  //   path: '', redirectTo: '/signup', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
