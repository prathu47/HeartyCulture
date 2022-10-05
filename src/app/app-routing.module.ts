import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';


const routes: Routes = [
  {path:'fruittrees',component:FruitTreesComponent}

=======
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'ferti',component:FertilizerComponent},
  {path:'contact',component:ContactComponent},
>>>>>>> 3dd607a5c6d2da8c21995eeb998b73ef58a55a36
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
