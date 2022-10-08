import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavnextComponent } from './navnext/navnext.component';
import { FruitTreesComponent } from './fruit-trees/fruit-trees.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { ContactComponent } from './contact/contact.component';
import { CactusSucculentsComponent } from './cactus-succulents/cactus-succulents.component';
import { CactusChilsComponent } from './cactus-succulents/cactus-chils/cactus-chils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavnextComponent,
    FruitTreesComponent,
    FertilizerComponent,
    ContactComponent,
    CactusSucculentsComponent,
    CactusChilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
