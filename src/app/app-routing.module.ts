import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';



  


const routes: Routes = [
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'fruittrees',component:FruitTreesComponent},
  {path:'cactus',component:CactusSucculentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
