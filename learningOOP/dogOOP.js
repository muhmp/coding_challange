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
}