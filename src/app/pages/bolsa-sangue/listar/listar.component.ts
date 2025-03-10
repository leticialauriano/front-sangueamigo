import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from 'src/static-data/aio-table-data';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSelectChange } from '@angular/material/select';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { BolsaSangue } from 'src/app/models/bolsa-sangue/bolsa-sangue.model';
import { BolsaSangueSalvarAlterarComponent } from '../salvar/salvar.component';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/models/shared/response.model';

@Component({
  selector: 'vex-listar-bolsa-sangue-table',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})

export class ListarBolsaSangueComponent implements OnInit, AfterViewInit, OnDestroy {

  layoutCtrl = new FormControl('fullwidth');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<BolsaSangue[]> = new ReplaySubject<BolsaSangue[]>(1);
  data$: Observable<BolsaSangue[]> = this.subject$.asObservable();
  bolsasSangue: BolsaSangue[];

  @Input()
  columns: TableColumn<BolsaSangue>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Animal', property: 'animal', subobjectproperty: 'nome', type: 'image', visible: true },
    { label: 'Tipo', property: 'tipo', subobjectproperty: 'nome',type: 'object', visible: true, cssClasses: ['font-medium'] },
    { label: 'Quantidade', property: 'quantidade', type: 'text', visible: true },
    { label: 'Volume (ml)', property: 'volume', type: 'text', visible: true },
    { label: 'Data da Validade', property: 'dataValidade', type: 'date', visible: true },
    { label: 'Proprietário', property: 'proprietario', subobjectproperty: 'nome',type: 'text', visible: true },
    { label: 'Data da Coleta', property: 'dataColeta', type: 'date', visible: true },    
     { label: 'Imediato', property: 'disponibilidadeImediata', type: 'boolean', visible: true },
    { label: 'Informacoes Adicionais', property: 'informacoesAdicionais', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<BolsaSangue> | null;
  selection = new SelectionModel<BolsaSangue>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icSearch = icSearch;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private http: HttpClient) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }


  getName(property: any) {
    return property?.nome || property || '';  // Acessa a propriedade 'nome' do objeto 'proprietario' ou retorna uma string vazia
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return this.http.get<Response>('http://localhost:5002/BolsasSangue');
  }

  ngOnInit() {
    this.getData().subscribe(bolsasSangue => {
      console.log(bolsasSangue.resultados);
      this.subject$.next(bolsasSangue.resultados as BolsaSangue[]);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<BolsaSangue[]>(Boolean)
    ).subscribe(bolsasSangue => {
      this.bolsasSangue = bolsasSangue;
      this.dataSource.data = bolsasSangue;
    });
    console.log(this.bolsasSangue);

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  adicionarBolsaSangue() {
    this.dialog.open(BolsaSangueSalvarAlterarComponent).afterClosed().subscribe((bolsaSangue: BolsaSangue) => {
      /**
       * Customer is the editard bolsaSangue (if the user pressed Save - otherwise it's null)
       */
      if (bolsaSangue) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.bolsasSangue.unshift(new BolsaSangue(bolsaSangue));
        this.subject$.next(this.bolsasSangue);
        this.getData().subscribe(bolsasSangue => {
          console.log(bolsasSangue.resultados);
          this.subject$.next(bolsasSangue.resultados as BolsaSangue[]);
        });
    
      }
    });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  ngOnDestroy() {
  }
}
