import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from '../schemas/offer.schema';
import { CreateOfferDto } from '../dtos/create-offer.dto';

@Injectable()
export class OfferService {
  constructor(@InjectModel('Oferta') private readonly offerModel: Model<Offer>) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdOffer = new this.offerModel(createOfferDto);
    return createdOffer.save();
  }

  async update(id: string, createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerModel.findByIdAndUpdate(id, createOfferDto, { new: true });
  }
}
