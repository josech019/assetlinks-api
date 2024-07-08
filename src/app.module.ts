import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetLinksModule } from './assetlinks/assetlinks.module';

@Module({
  imports: [AssetLinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
