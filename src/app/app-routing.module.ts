import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { PalmsCycasComponent } from './palms-cycas/palms-cycas.component';



  


const routes: Routes = [
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'fruittrees',component:FruitTreesComponent},
  {path:'palmscycas', component:PalmsCycasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
