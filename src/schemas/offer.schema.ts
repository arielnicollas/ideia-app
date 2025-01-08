import { Schema, Document } from 'mongoose';

export const OfferSchema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  link_afiliado: { type: String, required: true },
  data_expiracao: { type: String, required: true },
  loja_associada: { type: String, required: true },
  categoria: { type: String, required: true }
});

export interface Offer extends Document {
  titulo: string;
  descricao: string;
  link_afiliado: string;
  data_expiracao: string;
  loja_associada: string;
  categoria: string;
}
