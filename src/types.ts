
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
export class Inventory {
    slots=Array<Item>()
}
export interface Item {
    stackable:boolean;
    amount:number;
    typeName:string
}
export interface Doer {
    do(): void
}
export class OreItem implements Item {
    stackable=true;
    amount=1;
    typeName="OreItem";
    constructor(amount=1){
        this.amount=amount
    }
}


export class DoerEntity extends Entity {
    do(){
        console.log("DoerEntet")
    }
}


export class Miner extends DoerEntity implements Machine,Producer{
    typename="Miner";
    out=new Inventory;
    stage=0;
    maxStage=3;
    do(){
        console.log("Miner working",this.out, this.stage,"/",this.maxStage)
        this.stage++;
        if (this.stage===this.maxStage){
            this.stage=0;
            console.log("Mines")
            this.out.slots.push(new OreItem(1))
        }
    }
}

export interface Machine extends Doer {

}

export interface Producer {
    out:Inventory;
    stage:number;
    maxStage:number
}

export interface EnergyConsumer {
    consumption: number
}