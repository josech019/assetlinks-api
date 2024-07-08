import { Module } from '@nestjs/common';
import { AssetLinksController } from './assetlinks.controller';

@Module({
  controllers: [AssetLinksController],
})
export class AssetLinksModule {}
