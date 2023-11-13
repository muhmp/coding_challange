/*1. OOP Class 

// Basic of creating a class
// How to create a function
// Creating object

*/
//define class name
class Dog{
    constructor(name, birhday){ // paraameter
        this.name = name;
        this.birthday = birhday;
    }

    //Declare private variables
    _attendance = 0;

    //getAge method
    getAge(){
        //getter
        return this.calcAge();
    }

    //calcAge method
    calcAge(){
        //calculate ageusing todays date and birthday
        return Date.now() - this.birthday;
    }

    //bark
    bark(){
        return console.log("Woof");
    }

    //Update attendance method
    updateAttendance(){
        //add a day to the dogs attendance days at the petsitters
        this._attendance++;
    }
}

/** 2. Object */
//Instantiate a new object of the Dog class, and individual dog named Rufus
const rufus = new Dog("Rufus", "2/1/2015");