import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';
import { PalmIndoorComponent } from './palms-cycas/palm-indoor/palm-indoor.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { MedicineSeedsComponent } from './medicine-seeds/medicine-seeds.component';
import { OrnamantalTreesComponent } from './ornamantal-trees/ornamantal-trees.component';
import { MedicinalHerbsComponent } from './plants/medicinal-herbs/medicinal-herbs.component';
import { ComboPacksComponent } from './combo-packs/combo-packs.component';
import { ContainergardeningComponent } from './containergardening/containergardening.component';
import { FoundationplantComponent } from './foundationplant/foundationplant.component';
import { PlantselectionComponent } from './plantselection/plantselection.component';
import { SandalwoodComponent } from './sandalwood/sandalwood.component';
import { MiracleleafComponent } from './miracleleaf/miracleleaf.component';
import { DestinatedComponent } from './destinated/destinated.component';
import { TranquilComponent } from './tranquil/tranquil.component';
const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'fruittrees',component:FruitTreesComponent},
  {path:'cactus',component:CactusSucculentsComponent},
  {path:'palmscycas', component:PalmsCycasComponent},
  {path:'palmindoor',component:PalmIndoorComponent},
  {path: 'flowerseeds', component:FlowerSeedsComponent},
  {path: 'medicineseeds', component:MedicineSeedsComponent},
  {path: 'ornamantaltree', component:OrnamantalTreesComponent},
  {path:'plants/medicinal-herbs',component:MedicinalHerbsComponent},
  {path:'combo',component:ComboPacksComponent},
  {path:'containergardening',component:ContainergardeningComponent},
  {path:'foundationplant',component:FoundationplantComponent},
  {path:'plantselection',component:PlantselectionComponent},
  {path:'sandalwood',component:SandalwoodComponent},
  {path:'miracleleaf',component:MiracleleafComponent},
  {path:'destinated',component:DestinatedComponent},
  {path:'tranquil',component:TranquilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
