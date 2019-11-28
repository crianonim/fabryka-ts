
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