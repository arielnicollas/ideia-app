import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registra o schema no módulo
  ],
  controllers: [UserController], // Controlador para endpoints
  providers: [UserService], // Serviço para lógica de negócio
  exports: [UserService], // Torna o serviço acessível para outros módulos
})
export class UserModule {}
