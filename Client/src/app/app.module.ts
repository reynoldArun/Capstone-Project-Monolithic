import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { MessageboxComponent } from './components/messagebox/messagebox.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { SearchComponent } from './components/search/search.component';
import { CreateadminComponent } from './components/createadmin/createadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminDashboardComponent,
    HomeComponent,
    CreateuserComponent,
    CreateproductComponent,
    ShowusersComponent,
    ShowproductsComponent,
    AboutComponent,
    HeroComponent,
    ViewproductsComponent,
    MessageboxComponent,
    PagenotfoundComponent,
    UpdateuserComponent,
    UpdateproductComponent,
    SearchComponent,
    CreateadminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
