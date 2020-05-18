// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((acc, value) => acc + value)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if ( (this.array[0] + this.array[1])  > this.array[2]){
            if ( (this.array[2] + this.array[1])  > this.array[0]){
                if ( (this.array[2] + this.array[0])  > this.array[1]){
                    return true
                }
            }
        } 
    return false // if the code makes it here return false if its true it wont make it here
    }
}

class Square extends Polygon{

    get isValid(){
        if(this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]){
            return true
        }
        return false
    }

    get area(){
        return this.array[0] ** 2
    }
}