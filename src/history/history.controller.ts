import { Controller, Get, Post } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor (private historyService: HistoryService){}

    @Post('save')
    saveHistory(){
        return this.historyService.saveHistory();
    }

    @Get('getHistory')
    getHistory(){
        return this.historyService.getHistory();
    }
}
