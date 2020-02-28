import { NgModule } from '@angular/core';
import { BannerComponent } from '../home/components/banner/banner.component';
import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from '../home/home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule
    ]
})
export class HomeModulo {

}