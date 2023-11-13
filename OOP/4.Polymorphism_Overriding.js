// polymorphism

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

//Child class TrackingDog, inheritance from parent
// method override
class TrackingDog extends Dog {
    constructor(name, birthday){
        super(name);
        super(birthday);
    }
    //track
    track() {
        return console.log("Searching...");
    }

    //bark
    bark() {
        return console.log("Found it");
    }

}

//instantiate a new TrackingDog
const doggo = new TrackingDog("Doggo", "2019-01-01");
// bark to find it
doggo.bark();


