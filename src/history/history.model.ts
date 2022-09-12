
      const cassandra = require('cassandra-driver');

export default class HistoryModel{
  private client;



    constructor(){
      this.client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'dc1' });
      
    }
    

    saveHistory(data: string){
        //we are saving the data
      //this.datalist.push(data)

    }
    
    getDataList(){
        //return this.datalist;
        let client = this.client
        return client.connect()
        .then(function () {
          console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
          console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));
          console.log('Shutting down');
          return client.execute('SELECT * FROM block.metadata');
      
          
        })
        .then(response => {
          return(response.rows)
          // for(let i = 0; i < response.rows.length;i++){
          //   /* console.log('--------')
          //     console.log(response.rows[i].entry_id.toString())
          //     console.log(response.rows[i].metadata)
          //     console.log(response.rows[i].type)
          //     console.log(response.rows[i].time)
          //     console.log('--------')
          //     */
          //     return (response.rows[i])
          
        })
    }
}        
          