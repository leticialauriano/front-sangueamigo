import { Animal } from 'src/app/models/animal/animal.model';
import { Tipo } from 'src/app/models/tipo-sanguineo/tipo.model';

export const aioTableLabels = [
  {
    text: 'New',
    textClass: 'text-green',
    bgClass: 'bg-green-light',
    previewClass: 'bg-green'
  },
  {
    text: 'Lead',
    textClass: 'text-cyan',
    bgClass: 'bg-cyan-light',
    previewClass: 'bg-cyan'
  },
  {
    text: 'In Progress',
    textClass: 'text-teal',
    bgClass: 'bg-teal-light',
    previewClass: 'bg-teal'
  },
  {
    text: 'Completed',
    textClass: 'text-purple',
    bgClass: 'bg-purple-light',
    previewClass: 'bg-purple'
  },
];

export const aioTableData = [
  {
    id: "LRkmakuydkyZ95O1kXch7g==",
    animal: {"id":"1", "nome":"Cachorro"},
    tipo: {"id":"1", "nome":"Concentrado Emacias"},
    quantidade: 12,
    volume: 1102,
    disponibilidadeImediata: 'false',
    dataColeta: new Date('2019/01/01').toLocaleDateString(),
    dataValidade: new Date('2019/01/01').toLocaleDateString(),
    informacoesAdicionais: '+32 (818) 580-3557'
  },
  {
    id: "ARkmakuydkyZ95O1kXch7g==",
    animal: {"id":"1", "nome":"Gato"},
    tipo: {"id":"1", "nome":"Sangue Total"},
    quantidade: 12,
    volume: 1102,
    disponibilidadeImediata: 'true',
    dataColeta: new Date('2019/01/01').toLocaleDateString(),
    dataValidade: new Date('2019/01/01').toLocaleDateString(),
    informacoesAdicionais: '+32 (818) 580-3557'
  },
  {
    id: "4RkmakuydkyZ95O1kXch7g==",
    animal: {"id":"1", "nome":"Cachorro"},
    tipo: {"id":"1", "nome":"Sangue Total"},
    quantidade: 12,
    volume: 1102,
    disponibilidadeImediata: 'true',
    dataColeta: new Date('2019/01/01').toLocaleDateString(),
    dataValidade: new Date('2019/01/01').toLocaleDateString(),
    informacoesAdicionais: '+32 (818) 580-3557'
  },
  {
    id: "eRkmakuydkyZ95O1kXch7g==",
    animal: {"id":"1", "nome":"Gato"},
    tipo: {"id":"1", "nome":"Sangue Total"},
    quantidade: 12,
    volume: 1102,
    disponibilidadeImediata: 'true',
    dataColeta: new Date('2019/01/01').toLocaleDateString(),
    dataValidade: new Date('2019/01/01').toLocaleDateString(),
    informacoesAdicionais: '+32 (818) 580-3557'
  }
];
