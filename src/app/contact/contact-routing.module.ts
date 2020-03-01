import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './contact/contact.component';

const routers: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
   imports: [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
