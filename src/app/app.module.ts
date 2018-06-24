import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './shared/product.service';

const routeConfig: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product/:productId', component: ProductDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    BindComponent,
    MultiplePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
