import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    OurClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
