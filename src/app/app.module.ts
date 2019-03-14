import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RateSearchComponent } from './rate-search/rate-search.component';
import { RateSearchResultComponent } from './rate-search-result/rate-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RateSearchComponent,
    RateSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
