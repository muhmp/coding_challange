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
}