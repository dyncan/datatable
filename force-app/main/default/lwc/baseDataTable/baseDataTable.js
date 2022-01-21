import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/AccountController.getContacts';

export default class BaseDataTable extends LightningElement {
    error;
    showTable = false;
    allRecords;

    @wire(getContacts)
    resp( {error, data} ){
        if(data){
            let records =[];
            for(let i = 0; i < data.length; i++){
                let record = {};
                record.rowNumber = '' + (i+1);
                record.objectLink = '/' + data[i].Id;
                record = Object.assign(record, data[i]);
                records.push(record);

            }
            this.allRecords = records;
            this.showTable = true;
        }else{
            this.error = error;
        }
    }
}