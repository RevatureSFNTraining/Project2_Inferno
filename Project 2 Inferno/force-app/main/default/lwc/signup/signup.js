import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import EMAIL_FIELD from '@salesforce/schema/Account.Email__c';
import MEMBERSHIP from '@salesforce/schema/Account.Membership_Status__c';
import PASSWORD from '@salesforce/schema/Account.Password__c';
import NAMEONCARD from '@salesforce/schema/Account.Name_On_Card__c';
import CARDNUMBER from '@salesforce/schema/Account.Card_Number__c';
import CARDTYPE from '@salesforce/schema/Account.Card_Type__c';
import CVV from '@salesforce/schema/Account.CVV__c';
import EXPIRATION from '@salesforce/schema/Account.Expiration_Date__c';
import CARDSTATUS from '@salesforce/schema/Account.Card_Status__c';




export default class Signup extends LightningElement {


    FIELDS = [
        NAME_FIELD,
        EMAIL_FIELD,
        MEMBERSHIP,
        PASSWORD,
        NAMEONCARD,
        CARDNUMBER,
        CARDTYPE,
        CVV,
        EXPIRATION,
        CARDSTATUS,
    ];

    handleSuccess(event){
        this.dispatchEvent(new CustomEvent('signin', {detail: event.detail.id}));
    }

    handleClick(event){
        this.dispatchEvent(new CustomEvent('toggle'));
    }
    
}