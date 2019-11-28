import * as types from './types'
const e1=new types.Entity
const e2=new types.Entity
const m1=new types.Miner
const entities=[e1,e2,m1];
entities.map(e=>console.log(e.getId(),e.typename))

const tick=()=>{
    entities
    .filter(e=>e instanceof types.DoerEntity)
    .forEach( e => (e as types.DoerEntity).do())
}
for (let i=0;i<10;i++) tick();