function sayName(name: string): void {
    //voidy dnumenq erb vor funkcian voch mi ban chi veradarcnum
    console.log(name);
}
sayName("");

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {}
}

function Count(a: number, b: number, ...args: any): number {
    console.log(...args);
    return a + b;
}
Count(2, 3);

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}
type Id = number | undefined;
interface Position {
    x: Id;
    y: Id;
}

function myPosition(): Position
function myPosition(a:number): Position
function myPosition(a:number,b:number):Position


function myPosition(a?:number,b?:number){
    if (!a && !b) {
      return {x:undefined,y:undefined}
    }
    if (a && !b) {
      return {x: a, y: undefined, default: a.toString()}
    }
    return {x:a,y:b}
}

console.log('empty', myPosition())
console.log('oneParam', myPosition(2))
console.log('twoParam', myPosition(2,3))






type UserType = {
    sayHello:(a:string)=>string
}

let newObject:UserType = {
    sayHello(a:string){return a}
}

newObject.sayHello('3')
//objeckit meji funckcianer u parametrer


type object_ = {
    name:string
    surname:string
    age:number
    password:string
}


let x:object_ = {
    name:'Martiros',
    surname:'Harutunyan',
    age:17,
    password:'hhs13516'
}
type vercnelxType = typeof x
let tvyalner:vercnelxType = {
    age:15,
    name:'Martiros',
    password:'hhs13516',
    surname:'Harutunyan',
}

// senc vercrecinq patrasti objecti type-ry
