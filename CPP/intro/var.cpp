#include <iostream>

// main
// create  weight of an item calculates how much weight on mars
int main()
{
    // define variables
    double weight, height, bmi;

    // prompt user for weight and height
    std::cout << "Type in your weight in (m): ";
    std::cin >> weight;
    std::cout << "Type in your height in (m): ";
    std::cin >> height;

    // calculate bmi
    bmi = weight / (height * height);
    // print
    std::cout << "Your BMI is: " << bmi << std::endl;
    return 0;
}