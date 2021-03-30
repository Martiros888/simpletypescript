const number: number = 2;
const boolean: boolean = true;
const string: string = "Hello World";

const arrayOfNUmbers: Array<number> = [1, 2, 3];
const arrayOfNUmbers2: number[] = [1, 2, 3];

const arrayOfObjects: object[] = [{ key: "value" }, { key: "value" }];
const arrayOfObjects2: Array<object> = [{ key: "value" }, { key: "value" }];

const twoTypes: [string, number] = ["Hello", 333]; // petqa partadir amen andami hamar nshel vor elementna orinak string es stex arajiny stringa arajiny grelem string numbery erkrordna iran erkrordnem grel

let number2: any = 3;
number2 = "";


type Login = string;//stexcvec mer type vor karoxenq ogtagorcel amen tex
const login: Login = "";


type ID = string | number
const tiv:ID = 2;
const str:ID = '';
const tiv2:string|number = ''//2    //orinakner vonc karoxenq asel vor nranq ham number en ham string


let maleOrFemale : 'male' | 'female' = 'male'
