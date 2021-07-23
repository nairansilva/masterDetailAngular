import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categories', loadChildren:'./pages/categories/categories.module#CategoriesModule'}
];
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
