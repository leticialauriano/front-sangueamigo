import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SobreNosRoutingModule } from './sobre-nos-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SobreNosRoutingModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SobreNosModule {
}
