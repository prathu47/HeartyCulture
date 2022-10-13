import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavnextComponent } from './navnext/navnext.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';
import { CactusChilsComponent } from './cactus-succulents/cactus-chils/cactus-chils.component';

import { PalmCycasOutdoorComponent } from './palm-cycas-outdoor/palm-cycas-outdoor.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { MedicineSeedsComponent } from './medicine-seeds/medicine-seeds.component';
import { OrnamantalTreesComponent } from './ornamantal-trees/ornamantal-trees.component';
import { MedicinalHerbsComponent } from './plants/medicinal-herbs/medicinal-herbs.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';
import { PalmIndoorComponent } from './palms-cycas/palm-indoor/palm-indoor.component';
import { ComboPacksComponent } from './combo-packs/combo-packs.component';
import { CommunityComponent } from './community/community.component';
import { Article1Component } from './community-articles/article1/article1.component';
import { Article2Component } from './community-articles/article2/article2.component';
import { Article3Component } from './community-articles/article3/article3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavnextComponent,
    FruitTreesComponent,
    FertilizerComponent,
    ContactComponent,
    
    CarouselComponent,
    FooterComponent,
    FlowerSeedsComponent,
    MedicineSeedsComponent,
    OrnamantalTreesComponent,
    MedicinalHerbsComponent,
    CactusSucculentsComponent,
    CactusChilsComponent,
    PalmsCycasComponent,
    PalmIndoorComponent,
    ComboPacksComponent,
    CommunityComponent,
    Article1Component,
    Article2Component,
    Article3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
