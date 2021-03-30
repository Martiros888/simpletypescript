class Person {
    private id:string | number
    name:string
    surname:string
    password:string
    constructor(id:string|number,name:string,surname:string,password:string) {
        this.id = id
        this.name = name
        this.surname= surname
        this.password = password
    }
    private showPassword() {
        console.log(this.password)
    }
    protected showID(){
        console.log(this.id)
    }
    public showName() {
        console.log(this.name)
    }
}

class PersonWithHobies extends Person{
    hobbie:string
    constructor(id:string| number,name:string,surname:string,password:string,hobbie:string){
        super(id,name,surname,password)
        this.hobbie = hobbie
    }
    show(){
        this.showID()
        console.log(this.name)
    }
}

const person = new PersonWithHobies(1,'Martiros','Harutunyan','hhs13516','futbol')
console.log(person)
person.showName()
person.show()
