import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
// import { CustomerCreateUpdateModule } from './customer-create-update/customer-create-update.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListarBolsaSangueComponent } from './listar.component';
import { ListarBolsaSangueRoutingModule } from './listar-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ListarBolsaSangueComponent],
  imports: [
    CommonModule,
    ListarBolsaSangueRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    SecondaryToolbarModule,
    // CustomerCreateUpdateModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    MatButtonToggleModule
  ]
})
export class ListarBolsaSangueModule {
}
