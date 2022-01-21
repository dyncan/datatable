public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(){
        return [SELECT Id, Name, Birthdate, Title, Email, Phone FROM Contact];
    }

}
