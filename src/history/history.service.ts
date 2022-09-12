import { Injectable } from '@nestjs/common';
import HistoryModel from './history.model';

@Injectable()


export class HistoryService {
    
    private historyModel;
    constructor(){
        this.historyModel = new HistoryModel();

    }

    saveHistory(data: any){
        this.historyModel.saveHistory(data.key.toUpperCase())
       
    }

    getHistory(): string[] {
       return this.historyModel.getDataList();
    }
}
