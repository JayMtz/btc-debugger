import { query } from "express";
import { stringify } from "querystring";

const cassandra = require('cassandra-driver');
const async = require('async');
const assert = require('assert');

export default class HistoryModel{
  private client;
    constructor(){
      this.client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'dc1' });
    }
    

    saveHistory(data){
      let id = cassandra.types.Uuid.random();
      let time = cassandra.types.TimeUuid.now();
      let date = time.getDate();
      let client = this.client
      let metadataString = data.metadata;
      let type = data.type;
      let query = "INSERT INTO block.metadata (entry_id,metadata, type, time) VALUES (?,?,?,?)"

      return client.connect()
      .then(function () {
        console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
        console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));
        console.log('Shutting down');
        return client.execute(query, [id, metadataString, type, date], {prepare: true});
      })
      
    }
    
    getDataList(){
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
          
        })
    }
}        


function then(arg0: () => any) {
  throw new Error("Function not implemented.");
}
          