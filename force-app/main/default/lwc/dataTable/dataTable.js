import { LightningElement, api } from 'lwc';

export default class DataTable extends LightningElement {
    @api records;

    connectedCallback() {
        console.log(JSON.stringify(this.records));
    }
}