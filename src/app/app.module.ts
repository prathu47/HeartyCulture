import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavnextComponent } from './navnext/navnext.component';
<<<<<<< HEAD
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
=======
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> 3dd607a5c6d2da8c21995eeb998b73ef58a55a36

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavnextComponent,
<<<<<<< HEAD
    FruitTreesComponent
=======
    FertilizerComponent,
    ContactComponent
>>>>>>> 3dd607a5c6d2da8c21995eeb998b73ef58a55a36
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
