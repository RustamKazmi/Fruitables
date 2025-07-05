import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSection } from '../hero-section/hero-section';
import { FeaturesComponent } from '../features/features.component';
import { OrganicProductsComponent } from '../organic-products/organic-products.component';
import { OrganicVegComponent } from '../organic-veg/organic-veg.component';
import { Banner } from '../banner/banner';
import { Stats } from '../stats/stats';
import { Footer } from '../../../shared/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [HeroSection,FeaturesComponent,OrganicProductsComponent,OrganicVegComponent,Banner,Stats,Footer],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
 
}
