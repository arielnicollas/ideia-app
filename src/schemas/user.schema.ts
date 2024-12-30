import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  historico_compras: [
    {
      id_oferta: { type: Schema.Types.ObjectId, ref: 'Oferta' },
      data_compra: { type: Date, required: true },
      pontos_ganhos: { type: Number, required: true }
    }
  ],
  pontuacao_acumulada: { type: Number, default: 0 }
});

export interface User extends Document {
  nome: string;
  email: string;
  historico_compras: Array<{ id_oferta: string; data_compra: Date; pontos_ganhos: number }>;
  pontuacao_acumulada: number;
}

