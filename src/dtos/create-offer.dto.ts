// import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOfferDto {
  // @IsString()
  // @IsNotEmpty()
  titulo: string;

  // @IsString()
  // @IsNotEmpty()
  descricao: string;

  // @IsString()
  // @IsNotEmpty()
  link_afiliado: string;

  // @IsDateString()
  // @IsNotEmpty()
  data_expiracao: string;

  // @IsString()
  // @IsNotEmpty()
  loja_associada: string;

  // @IsString()
  // @IsNotEmpty()
  categoria: string;

  }
  