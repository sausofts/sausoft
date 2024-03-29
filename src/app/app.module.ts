import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './partials/top-bar/top-bar.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { CarouselComponent } from './includes/carousel/carousel.component';
import { ServicesComponent } from './includes/services/services.component';
import { PortfolioComponent } from './includes/portfolio/portfolio.component';
import { OurClientsComponent } from './includes/our-clients/our-clients.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { BreadcrumbsComponent } from './includes/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    CarouselComponent,
    ServicesComponent,
    PortfolioComponent,
    OurClientsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesPageComponent,
    PortfolioPageComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
