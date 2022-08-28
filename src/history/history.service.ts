import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
    saveHistory(data):object{
        return data.key


        return null;
    }

    getHistory(): object {
        return  { msg: 'your history has been fetched'}
    }
}
