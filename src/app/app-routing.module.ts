import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';


const routes: Routes = [
  {path:'fruittrees',component:FruitTreesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
