import {IContact} from './contact.interface';

export class Contact implements IContact{
    constructor(
       public id:number,
       public firstName: string,
       public lastName: string,
       public phoneNumber: string
    ){}
    
}