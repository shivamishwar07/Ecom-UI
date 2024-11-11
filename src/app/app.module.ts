import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DisplayItemComponent } from './components/display-item/display-item.component';
import { GalaryItemsComponent } from './components/galary-items/galary-items.component';
import { SaleBannerComponent } from './components/sale-banner/sale-banner.component';
import { OurCollectionsComponent } from './components/our-collections/our-collections.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    DisplayItemComponent,
    GalaryItemsComponent,
    SaleBannerComponent,
    OurCollectionsComponent,
    AboutMeComponent,
    CustomerReviewsComponent,
    NewslatterComponent,
    ServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
