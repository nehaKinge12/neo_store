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
    HeadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
