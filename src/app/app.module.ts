import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CommonsHeaderComponent } from './commons-header/commons-header.component';
import { FooterComponent } from './commons-footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageTrendingCategoriesComponent } from './home-page-trending-categories/home-page-trending-categories.component';
import { HomePageWelcomingButtonsComponent } from './home-page-welcoming-buttons/home-page-welcoming-buttons.component';
import { ProductLoaderComponent } from './product-loader/product-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonsHeaderComponent,
    FooterComponent,
    HomePageComponent,
    HomePageTrendingCategoriesComponent,
    HomePageWelcomingButtonsComponent,
    ProductLoaderComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ])
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
