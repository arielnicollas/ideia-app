import { Schema, Document } from 'mongoose';

export const TransactionSchema = new Schema({
  id_usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  id_oferta: { type: Schema.Types.ObjectId, ref: 'Oferta', required: true },
  data_compra: { type: Date, required: true },
  pontos_ganhos: { type: Number, required: true }
});

export interface Transaction extends Document {
  id_usuario: string;
  id_oferta: string;
  data_compra: Date;
  pontos_ganhos: number;
}
