import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavnextComponent } from './navnext/navnext.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';
import { PalmCycasOutdoorComponent } from './palm-cycas-outdoor/palm-cycas-outdoor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavnextComponent,
    FruitTreesComponent,
    FertilizerComponent,
    ContactComponent,
    PalmsCycasComponent,
    PalmCycasOutdoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
