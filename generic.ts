const arr: number[] = [1,2,3,4,5,6,7] 
const arr2: string[] = ['1','2','3','4','5','6','7'] 


function reverse<T>(array:T[]): T[] {
    return array.reverse()
}

reverse(arr)
reverse(arr2)