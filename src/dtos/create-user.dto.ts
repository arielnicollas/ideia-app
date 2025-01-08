export class CreateUserDto {
    nome: string;
    email: string;
    historico_compras: Array<{ id_oferta: string; data_compra: Date; pontos_ganhos: number }>;
    pontuacao_acumulada: number;
  }
  