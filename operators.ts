interface Person{
    name:string
    age:number
}
type PersonKey = keyof Person// name:string |  age:number

let key: PersonKey = 'name'
key = 'age'


type User = {
    _id:number
    name:string
    email:string
    createAt:Date
}

type UserCaseNoMeta = Exclude<keyof User, '_id' | 'createAt'>
type UserCaseNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserCaseNoMeta = 'email' 

type variable = 'ACTION' | 'NOT ACTION'
