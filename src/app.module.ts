import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
