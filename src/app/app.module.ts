import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from'@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from'@angular/material/list';
import { MatButtonModule } from'@angular/material/button';
import { MatSnackBarModule } from'@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { UsersDeleteComponent } from './components/users/users-delete/users-delete.component';

import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    UsersListComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    }),

  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
