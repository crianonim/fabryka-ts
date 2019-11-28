
export class Entity {
    private id:number;
    private static nextId=0;
    constructor(){
        this.id=Entity.nextId++;
    }
    getId():number{
        return this.id;
    }
    typename="Entity"
}
export interface Item {
    stackable:boolean;
    amount:number;
    typeName:string
}
export interface Doer {
    do(): void
}

export interface Machine extends Doer {

}

export interface Producer {

}

export interface EnergyConsumer {
    consumption: number
}