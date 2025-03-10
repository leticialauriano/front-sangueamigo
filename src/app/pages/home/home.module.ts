import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsMcr_0zqJ0QG18Z4cx-ETuOps02jhD3g'
    }),
    CommonModule,
    HomeRoutingModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule {
}
