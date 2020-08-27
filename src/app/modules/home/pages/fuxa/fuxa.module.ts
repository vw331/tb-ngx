import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FuxaRoutingModule } from './fuxa-routing.module';
import { HomeComponent } from './home/home.component';
import { FuxaViewComponent } from './fuxa-view/fuxa-view.component';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [HomeComponent, FuxaViewComponent, EditorComponent],
  imports: [
    CommonModule, 
    SharedModule,
    FuxaRoutingModule
  ]
})
export class FuxaModule { }
