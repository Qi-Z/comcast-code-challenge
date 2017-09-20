import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListSortableComponent } from './product-list-sortable/product-list-sortable.component';
import { ProductListProcessedComponent } from './product-list-processed/product-list-processed.component';
import { OrderByPipe } from './order-by.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sortable-list', component: ProductListSortableComponent},
  { path: 'processed-list', component: ProductListProcessedComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListSortableComponent,
    ProductListProcessedComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
