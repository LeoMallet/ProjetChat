import { Proprietaire } from './proprietaire';

export class Message{

       constructor(public id?:number,public contenu?:string, public date?:string, public expediteur?:Proprietaire, public salonId?:number){}
}
