import { Animal } from '../animal/animal.model';
import { Proprietario } from '../pessoa/proprietario.model';
import { Tipo } from '../tipo-sanguineo/tipo.model';

export class BolsaSangue {
    id: string;
    animal: Animal;
    proprietario: Proprietario;
    tipo: Tipo;
    quantidade: string;
    volume: string;
    dataColeta: Date;
    dataValidade: Date;
    informacoesAdicionais: string;
    disponibilidadeImediata: boolean;
  
    constructor(bolsaSangue) {
      this.id = bolsaSangue.id;
      this.animal = bolsaSangue.animal;
      this.proprietario = bolsaSangue.proprietario;
      this.tipo = bolsaSangue.tipo;
      this.quantidade = bolsaSangue.quantidade;
      this.volume = bolsaSangue.volume;
      this.dataColeta = bolsaSangue.dataColeta;
      this.dataValidade = bolsaSangue.dataValidade;
      this.informacoesAdicionais = bolsaSangue.informacoesAdicionais;
      this.disponibilidadeImediata = bolsaSangue.disponibilidadeImediata;
    }
  }  