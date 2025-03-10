import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Animal } from 'src/app/models/animal/animal.model';
import { Tipo } from 'src/app/models/tipo-sanguineo/tipo.model';
import { environment } from 'src/environments/environment';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'vex-bolsa-sangue-salvar',
  templateUrl: './salvar.component.html',
  styleUrls: ['./salvar.component.scss']
})
export class BolsaSangueSalvarAlterarComponent implements OnInit {
  form: FormGroup;
  mode: 'salvar' | 'alterar' = 'salvar';
  modulo = "";
  animais: Animal[] = [];
  tiposSanguineos: Tipo[] = [];
  icMoreVert = icMoreVert;
  icClose = icClose;
  proprietarios: any[] = [];
  proprietario: any = null;
  enderecos: any[] = [];

  // Form Controls
  animaisDropDrown = new FormControl();
  tiposSanguineosDropDrown = new FormControl();
  proprietarioDropDrown = new FormControl();
  enderecoDropDrown = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<BolsaSangueSalvarAlterarComponent>,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      quantidade: ['', Validators.required],
      volume: ['', Validators.required],
      dataValidade: ['', Validators.required],
      dataColeta: ['', Validators.required],
      informacoesAdicionais: ['', Validators.maxLength(255)],
      animaisDropDrown: ['', Validators.required],
      tiposSanguineosDropDrown: ['', Validators.required],
      enderecoDropDrown: ['', Validators.required],
      proprietarioDropDrown: ['', Validators.required]
    });

    // Carregar dados iniciais de animais, tipos sanguíneos, e proprietários
    this.loadAnimais();
    this.loadTiposSanguineos();
    this.loadProprietarios();
    this.modulo = 'Nova';    
  }

  // Função para carregar os proprietários
  loadProprietarios() {
    this.http.get('http://localhost:5001/proprietario').subscribe((response: any) => {
      this.proprietarios = Array.isArray(response.resultados) ? response.resultados : [];
    });
  }

  // Função que será chamada ao selecionar um proprietário
  onProprietarioChange(event: any) {
    const proprietarioId = event.value;
    this.loadEnderecos(proprietarioId);
  }

  // Função para carregar os endereços do proprietário
  loadEnderecos(proprietarioId: string) {
    // Verifica se o ID do Proprietário está presente
    if (!proprietarioId) {
      console.error('ID do Proprietário não fornecido!');
      return;
    }
  
    // Carregar os endereços do Proprietário
    this.http.get(`http://localhost:5001/proprietario/${proprietarioId}/enderecos`).subscribe(
      (response: any) => {
        this.enderecos = Array.isArray(response.resultados) ? response.resultados : [];
        
        if (this.defaults.endereco) {
          const enderecoSelecionado = this.enderecos.find(e => e.id === this.defaults.endereco.id);
          
          // Verifica se o Endereço foi encontrado
          if (enderecoSelecionado) {
            this.form.patchValue({
              enderecoDropDrown: enderecoSelecionado.id
            });
          } else {
            console.error('Endereço não encontrado');
          }
        }
      },
      (error) => {
        console.error('Erro ao carregar os Endereços:', error);
      }
    );
  }

  // Função para carregar os animais
  loadAnimais() {
    this.http.get('http://localhost:5002/Animais').subscribe((response: any) => {
      this.animais = Array.isArray(response.resultados) ? response.resultados : [];
    });
  }

  // Função para carregar os tipos sanguíneos
  loadTiposSanguineos() {
    this.http.get('http://localhost:5002/TiposBolsaSangues').subscribe((response: any) => {
      this.tiposSanguineos = Array.isArray(response.resultados) ? response.resultados : [];
    });
  }

  // Função para salvar a bolsa de sangue
  save() {
      this.salvarBolsaSangue();
  }

  // Função para salvar a bolsa de sangue no modo 'salvar'
  salvarBolsaSangue() {
    const bolsaSangue = this.form.value;
    const dadosParaSalvar = {
      idProprietario: bolsaSangue.proprietarioDropDrown,
      idLocalizacao: bolsaSangue.enderecoDropDrown,
      idAnimal: bolsaSangue.animaisDropDrown,
      idTipoBolsa: bolsaSangue.tiposSanguineosDropDrown,
      quantidade: bolsaSangue.quantidade,
      disponibilidadeImediata: bolsaSangue.disponibilidadeImediata || false,
      dataColeta: bolsaSangue.dataColeta,
      dataValidade: bolsaSangue.dataValidade,
      volume: bolsaSangue.volume,
      informacoesAdicionais: bolsaSangue.informacoesAdicionais
    };

    this.http.post(`${environment.apiBolsaSangueUrl}/BolsaSangue`, dadosParaSalvar)
      .subscribe(response => {
        this.dialogRef.close(response);
      });
  }

  // Funções de verificação de modo
  isSalvarMode() {
    return this.mode === 'salvar';
  }
}
