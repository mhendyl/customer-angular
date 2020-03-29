import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { LandingComponent } from './modules/landing/landing.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AboutComponent } from './modules/about/about.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CardComponent } from './modules/landing/card/card.component';
import { ListComponent } from './modules/landing/list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effect } from './shared/store';
import { UpdateComponent } from './modules/update/update.component';
import { CreateComponent } from './modules/landing/create/create.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CardComponent,
    ListComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('customer', reducers),
    EffectsModule.forRoot(effect)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
