import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerComponent } from './fertilizer/fertilizer.component';



const routes: Routes = [
  {path:'ferti',component:FertilizerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
