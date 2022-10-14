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
import { CommunityComponent } from './community/community.component';
import { Article1Component } from './community-articles/article1/article1.component';
import { Article2Component } from './community-articles/article2/article2.component';
import { Article3Component } from './community-articles/article3/article3.component';

import { ContainergardeningComponent } from './PlantTips/containergardening/containergardening.component';
import { FoundationplantsComponent } from './PlantTips/foundationplants/foundationplants.component';
import { PlantselectionComponent } from './PlantTips/plantselection/plantselection.component';

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
  {path:'community',component:CommunityComponent},
  {path: 'communityarticles/article1', component:Article1Component},
  {path: 'communityarticles/article2', component:Article2Component},
  {path: 'communityarticles/article3', component: Article3Component},
  {path:'PlantTips/containergardening',component:ContainergardeningComponent},
  {path:'PlantTips/foundationplants',component:FoundationplantsComponent},
  {path:'PlantTips/plantselection',component:ContainergardeningComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
