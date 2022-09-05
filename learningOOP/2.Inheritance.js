/*Inheritance*/ 

//Dog

class Dog {
    //declare protected (private) fields
    _attendance = 0;

    //define constructor with parameter name and birthday
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    getAge() {
        //Getter
        return this.calcAge();
    }

    calcAge() {
        //calculate age using today's date and birthday
        return this.calcAge();
    }

    bark() {
        return console.log("Woof!");
    }

    updateAttendance() {
        //add a day to the dog's attendance days at the petsitters
        this._attendance++;
    }
}

/*Inheritance class here */

//child class HerdingDog, inhertis from parent Dog
class HerdingDog extends Dog { // point here : HerdingDog also inherit bark() method from parent
    constructor(name, birthday){
        super(name);
        super(birthday);
    }
    //herd method
    herd(){
        //return
        return console.log("Stay Together");
    }
}

// Object: instantiate a new HerdingDog object 
//fluffy
const fluffy  = new HerdingDog("Fluffy", "1/2/2015"); // name an birthday as defined from the previous constructor  
//fluffy doing bark
fluffy.bark();