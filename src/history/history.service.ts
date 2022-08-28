import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
    saveHistory():object{
        return {msg: 'your debug has been saved'}
    }

    getHistory(): object {
        return {msg: 'your history has been fetched'}
    }
}
