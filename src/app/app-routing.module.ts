import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { MedicineSeedsComponent } from './medicine-seeds/medicine-seeds.component';
import { OrnamantalTreesComponent } from './ornamantal-trees/ornamantal-trees.component';
import { MedicinalHerbsComponent } from './plants/medicinal-herbs/medicinal-herbs.component';
import { ComboPacksComponent } from './combo-packs/combo-packs.component';


const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'fruittrees',component:FruitTreesComponent},
  {path:'cactus',component:CactusSucculentsComponent},
  {path:'palmscycas', component:PalmsCycasComponent},
  {path: 'flowerseeds', component:FlowerSeedsComponent},
  {path: 'medicineseeds', component:MedicineSeedsComponent},
  {path: 'ornamantaltree', component:OrnamantalTreesComponent},
  {path:'plants/medicinal-herbs',component:MedicinalHerbsComponent},
  {path:'combo',component:ComboPacksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
