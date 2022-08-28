export default class HistoryModel{
    //all the variables/functions that belond to HistoryModel
    //two functions saveHistory, getHistory

    private datalist = [];

    saveHistory(data: string){
        //we are saving the data
       this.datalist.push(data)
    }

    getDataList(){
        return this.datalist;
    }
}