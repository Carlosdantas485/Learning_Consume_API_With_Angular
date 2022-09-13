import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { UsersDeleteComponent } from './components/users/users-delete/users-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreateComponent
  },
  {
    path:"products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path:"products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path:"users",
    component: UsersListComponent
  },
  {
    path:"users/create",
    component: UsersCreateComponent
  },
  {
    path:"users/delete/:id",
    component: UsersDeleteComponent
  },
  {
    path:"users/update/:id",
    component: UsersUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
