import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kunaliihglobal:233NOyMHwaUbchei@cluster0.1dma0.mongodb.net/KPM?retryWrites=true&w=majority'),
    UserModule
  ],
  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
