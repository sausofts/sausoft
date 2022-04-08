import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
