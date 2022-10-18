import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { OutdoorPlantsComponent } from './plants/outdoor-plants/outdoor-plants.component';
import { IndoorPlantsComponent } from './plants/indoor-plants/indoor-plants.component';
import { GrassesComponent } from './plants/grasses/grasses.component';
import { IndoorComponent } from './plants/indoor-plants/indoor/indoor.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SandalwoodComponent } from './sandalwood/sandalwood.component';
import { MiracleleafComponent } from './miracleleaf/miracleleaf.component';
import { DestinatedComponent } from './destinated/destinated.component';
import { TranquilComponent } from './tranquil/tranquil.component';
import { CommunityComponent } from './community/community.component';
import { Article1Component } from './community-articles/article1/article1.component';
import { Article2Component } from './community-articles/article2/article2.component';
import { Article3Component } from './community-articles/article3/article3.component';
import { FoundationplantsComponent } from './PlantTips/foundationplants/foundationplants.component';
import { ContainergardeningComponent } from './PlantTips/containergardening/containergardening.component';
import { PlantselectionComponent } from './PlantTips/plantselection/plantselection.component';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryDirective } from './gallery.directive';
import { AllproductsComponent } from './allproducts/allproducts.component';

import { CactusDetailComponent } from './cactus-succulents/cactus-detail/cactus-detail.component';
import { ComboDetailComponent } from './combo-packs/combo-detail/combo-detail.component';


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
    OutdoorPlantsComponent,
    IndoorPlantsComponent,
    GrassesComponent,
    IndoorComponent,
    CheckoutComponent,
    CommunityComponent,
    Article3Component,
    Article1Component,
    Article2Component,
    Article3Component,
    PalmCycasOutdoorComponent,
    ComboPacksComponent,
    ContainergardeningComponent,
    FoundationplantsComponent,
    SearchFilterPipe,
    PlantselectionComponent,
    SandalwoodComponent,
    CartItemsComponent,
    MiracleleafComponent,
    DestinatedComponent,
    TranquilComponent,
    GalleryDirective,
    LoginComponent,
    RegisterComponent,
    CactusDetailComponent,
    ComboDetailComponent,
    PaymentComponent,
    GalleryDirective,
    LoginComponent,
    RegisterComponent,
    AllproductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,

BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
