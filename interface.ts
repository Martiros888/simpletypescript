interface rect{
    id:number|string
    color?:string
    size:{
        width:number
        height:number
    }
}
const obyect: rect = {
    id:'332',
    //color:'',//colory drelenq ? et nshanakuma kara ylni kara chlni
    size:{
        width:3,
        height:3
    }
};
// obyect.size.width = 4
obyect.id = '32'    // ete recti mej id-i dimacic grenq readonly dranic heto menq chenq kara et mer nor stexcvac objecti mej ban poxenq bayc inchy vor ?-ova drvac exel u chka mer nor objectum karanq avelacnenq

const rect3 = {} as rect//nuynen
const rect4 = <rect>{}//nuynen

interface RectWithArea extends rect {
    getArea:()=> number
    width:string
}

const obyect2: RectWithArea = {
    id:'4',
    size:{
        width:3,
        height:4
    },
    width:'',
    getArea():number{
        return this.size.width * this.size.height     
    }
};
obyect2.getArea()


interface Styles{
   [key:string]:string//es arvuma enra hamar vor saxi hamar aranzin chgrenq string
}


const obyect3: Styles = {
    name:'string',
    surname:'string',
    email:'string',
}


interface IClock{
    time:Date
    setTime(date:Date):void
}


class clock implements IClock {
    time: Date = new Date()
    setTime(date:Date):void{
        this.time = date
    }
}
