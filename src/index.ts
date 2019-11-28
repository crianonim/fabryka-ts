import * as types from './types'
const t="Entity"
var e1 = new types[t];
var e2 = new types[t];
var entities = [e1, e2];
entities.map(e=>console.log(e.getId()))