import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferDto } from '../dtos/create-offer.dto';
import { Offer } from '../schemas/offer.schema';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  async create(@Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerService.create(createOfferDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offerService.update(id, createOfferDto);
  }
}
