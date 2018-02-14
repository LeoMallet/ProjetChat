import { Message } from './message';
import { Proprietaire } from './proprietaire';

export class Salon{

  constructor(public id?:number, public nom?:string, public proprietaire?:Proprietaire, public message?:Message){}

}
