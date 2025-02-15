import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from '../schemas/offer.schema';
import { CreateOfferDto } from '../dtos/create-offer.dto';

@Injectable()
export class OfferService {
  constructor(@InjectModel('Offer') private readonly offerModel: Model<Offer>) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdOffer = new this.offerModel(createOfferDto);
    return createdOffer.save();
  }

  async update(id: string, createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerModel.findByIdAndUpdate(id, createOfferDto, { new: true });
  }

  async findOffersByCategory(categoria: string): Promise<Offer[]> {
    // if (!category || typeof category !== 'string') {
    //   throw new Error('Invalid category. Category must be a non-empty string.');
    // }
    
    // const allowedCategorias = ['Clothing', 'Food', 'Technology'];

    // if(!allowedCategorias.includes(category)){

    // }

    const offers = await this.offerModel.find({ categoria }).exec();
    console.log('Ofertas encontradas:', offers);
    return offers
  }
}
