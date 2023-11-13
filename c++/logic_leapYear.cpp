#include <iostream>

int main()
{
    // define variables
    int year = 0;
    bool leapYear;

    // enter year
    std::cout << "Enter year: ";
    std::cin >> year; // year variable

    // if year is < 1000 or > 9999, then it is not a leap year
    if (year < 1000 || year > 9999)
    {
        std::cout << "Not a leap year" << std::endl;
    }
    // check if year is a leap year using logic operators
    else if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        /* code */
        std::cout << "Leap year" << std::endl;
        leapYear = true;
    }
    else
    {
        std::cout << "Not a leap year" << std::endl;
        leapYear = false;
    }
}