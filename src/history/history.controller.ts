import { Body, Controller, Get, Header, Headers, Post, Req } from '@nestjs/common';
import { metadata } from 'cassandra-driver';
import { accessSync } from 'fs';
import { stringify } from 'querystring';
import { async } from 'rxjs';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
    constructor (private historyService: HistoryService){}

    @Post('save')
    saveHistory(@Body() metadata) {
        console.log(metadata)
        return this.historyService.saveHistory(metadata);
    }

    @Get('getHistory')
    @Header('Access-Control-Allow-Origin', '*')
    @Header('Access-Control-Allow-Headers', 'Content-Type')
    @Header('Access-Control-Content-Type', 'application/json;charset=utf8')
    async getHistory(){
        return this.historyService.getHistory();
    }
}
//        return this.historyService.saveHistory(data);
