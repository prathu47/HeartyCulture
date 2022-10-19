import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';
import { PalmIndoorComponent } from './palms-cycas/palm-indoor/palm-indoor.component';
import { PalmCycasOutdoorComponent } from './palm-cycas-outdoor/palm-cycas-outdoor.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { MedicineSeedsComponent } from './medicine-seeds/medicine-seeds.component';
import { OrnamantalTreesComponent } from './ornamantal-trees/ornamantal-trees.component';
import { MedicinalHerbsComponent } from './plants/medicinal-herbs/medicinal-herbs.component';
import { ComboPacksComponent } from './combo-packs/combo-packs.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndoorPlantsComponent } from './plants/indoor-plants/indoor-plants.component';
import { OutdoorPlantsComponent } from './plants/outdoor-plants/outdoor-plants.component';
import { GrassesComponent } from './plants/grasses/grasses.component';
import { SandalwoodComponent } from './sandalwood/sandalwood.component';
import { MiracleleafComponent } from './miracleleaf/miracleleaf.component';
import { DestinatedComponent } from './destinated/destinated.component';
import { TranquilComponent } from './tranquil/tranquil.component';
import { CommunityComponent } from './community/community.component';
import { Article1Component } from './community-articles/article1/article1.component';
import { Article2Component } from './community-articles/article2/article2.component';
import { Article3Component } from './community-articles/article3/article3.component';
import { CactusDetailComponent } from './cactus-succulents/cactus-detail/cactus-detail.component';
import { ContainergardeningComponent } from './PlantTips/containergardening/containergardening.component';
import { FoundationplantsComponent } from './PlantTips/foundationplants/foundationplants.component';
import { PlantselectionComponent } from './PlantTips/plantselection/plantselection.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ComboDetailComponent } from './combo-packs/combo-detail/combo-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { MedicinalHerbsDetailsComponent } from './plants/medicinal-herbs/medicinal-herbs-details/medicinal-herbs-details.component';
import { FertilizerDetailsComponent } from './fertilizer/fertilizer-details/fertilizer-details.component';
import { IndoordetailsComponent } from './palms-cycas/indoordetails/indoordetails.component';
import { PrivacypolicyComponent } from './policy/privacypolicy/privacypolicy.component';
import { TermsComponent } from './policy/terms/terms.component';
import { ShippingComponent } from './policy/shipping/shipping.component';
import { RefundsComponent } from './policy/refunds/refunds.component';
import { FruitsDetailsComponent } from './fruit-trees/fruits-details/fruits-details.component';
import { AllproductsdetailsComponent } from './allproducts/allproductsdetails/allproductsdetails.component';



const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'fruittrees',component:FruitTreesComponent},
  {path:'cactus',component:CactusSucculentsComponent},
  {path:'palmscycas', component:PalmsCycasComponent},
  {path:'palmindoor',component:PalmIndoorComponent},
  {path:'palmcycasoutdoor',component:PalmCycasOutdoorComponent},
  {path: 'flowerseeds', component:FlowerSeedsComponent},
  {path: 'medicineseeds', component:MedicineSeedsComponent},
  {path: 'ornamantaltree', component:OrnamantalTreesComponent},
  {path:'plants/medicinal-herbs',component:MedicinalHerbsComponent},
  {path:'combo',component:ComboPacksComponent},
  {path:'plants/indoorplants',component:IndoorPlantsComponent},
  {path:'plants/outdoorplants',component:OutdoorPlantsComponent},
  {path:'plants/grasses',component:GrassesComponent},
  {path:'containergardening',component:ContainergardeningComponent},
  {path:'plantselection',component:PlantselectionComponent},
  {path:'sandalwood',component:SandalwoodComponent},
  {path:'miracleleaf',component:MiracleleafComponent},
  {path:'destinated',component:DestinatedComponent},
  {path:'tranquil',component:TranquilComponent},
  {path:'community',component:CommunityComponent},
  {path: 'communityarticles/article1', component:Article1Component},
  {path: 'communityarticles/article2', component:Article2Component},
  {path: 'communityarticles/article3', component: Article3Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'PlantTips/containergardening',component:ContainergardeningComponent},
  {path:'PlantTips/foundationplants',component:FoundationplantsComponent},
  {path:'PlantTips/plantselection',component:ContainergardeningComponent},
  {path:"cartitems",component:CartItemsComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"prod_details",component:ProductdetailsComponent},
{path:"cactuaDetail/:id",component:CactusDetailComponent},
{path:"comboDetail/:id",component:ComboDetailComponent},
{path:"policy",component:PrivacypolicyComponent},
{path:"terms",component:TermsComponent},
{path:"ship",component:ShippingComponent},
{path:"refund",component:RefundsComponent},
  {path:"payment",component:PaymentComponent},
  {path: "allproducts", component: AllproductsComponent},
  {path:"medicinaldetails/:id", component:MedicinalHerbsDetailsComponent},
  {path:"fertilizerdetails/:id", component:FertilizerDetailsComponent},
  {path:"indoordetails/:id", component:IndoordetailsComponent},
  {path:"fruitdetails/:id", component:FruitsDetailsComponent},
  {path:"allproductdetails/:id", component:AllproductsdetailsComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
