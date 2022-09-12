import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
import { accessSync } from 'fs';
import { async } from 'rxjs';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor (private historyService: HistoryService){}

    @Post('save')
    @Header('Accept', 'text/plain')
    saveHistory(@Body() data: string) {
        return this.historyService.saveHistory(data);
    }

    @Get('getHistory')
    async getHistory(){
        return this.historyService.getHistory();
    }
}
