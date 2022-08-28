import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
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
    getHistory(){
        return this.historyService.getHistory();
    }
}
