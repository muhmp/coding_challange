//parent class dog
class Dog {
    //Declare protected(private) fields
    _attendance = 0;

    //constructor
    constructor(name, birthday){
        this.name = name;
        this.birthday = birthday;
    }

    //age 
    getAge(){
        //Getter
        return this.calcAge();
    }
    //calculate age method
    calcAge(){
        //calculate age using todays date and birthday
        return this.calcAge();
    }

    //bark method
    bark(){
        return console.log("Woof Woof");
    }
    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }
}

// inisiate a new dog
const dog1 = new Dog("Rex", "2019-01-01");

//getAge
console.log(dog1.getAge());