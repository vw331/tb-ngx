import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authority } from '@shared/models/authority.enum'
import { HomeComponent  } from './home/home.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: 'fuxa',
    data: {
      auth: [Authority.TENANT_ADMIN, Authority.CUSTOMER_USER],
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuxaRoutingModule { }
