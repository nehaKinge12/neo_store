import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ShopByDepartmentComponent } from './shop-by-department/shop-by-department.component';
import { TrendingComponent } from './trending/trending.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { FooterComponent } from './footer/footer.component';
import { FromOurBlogComponent } from './from-our-blog/from-our-blog.component';
import { SignUpOffersComponent } from './sign-up-offers/sign-up-offers.component';
import { NeoStoreFurnitureComponent } from './neo-store-furniture/neo-store-furniture.component';
import { HeadingsComponent } from './headings/headings.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticeComponent } from './notice/notice.component';
import { HeaderComponent } from './header/header.component';
import { SwiperModule } from 'swiper/angular';
import { NgbCarouselModule, NgbRating, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { NeedItFastComponent } from './need-it-fast/need-it-fast.component';
import { FurnitureForEveryBudgetComponent } from './furniture-for-every-budget/furniture-for-every-budget.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { ProductComponent } from './product/product.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import { CheckoutIconComponent } from './checkout-icon/checkout-icon.component';
import { ChekoutShippingAddressComponent } from './chekout-shipping-address/chekout-shipping-address.component';
import { YouMightLikeComponent } from './you-might-like/you-might-like.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ShopByDepartmentComponent,
    TrendingComponent,
    SpecialOfferComponent,
    FooterComponent,
    FromOurBlogComponent,
    SignUpOffersComponent,
    NeoStoreFurnitureComponent,
    HeadingsComponent,
    LoginComponent,
    SignUpComponent,
    NoticeComponent,
    HeaderComponent,
    NeedItFastComponent,
    FurnitureForEveryBudgetComponent,
    BestSellerComponent,
    NewArrivalComponent,
    ProductComponent,
    ProductHeaderComponent,
    ProductDetailsComponent,
    ProductListDetailsComponent,
    CheckoutIconComponent,
    ChekoutShippingAddressComponent,
    YouMightLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule,
    NgbRating,
    NgbCarouselModule,
    NgbPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
