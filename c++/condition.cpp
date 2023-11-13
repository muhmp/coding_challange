#include <iostream>

int main()
{
    // createt a space gravity weight conversion of all planet

    // define variables
    double weight;
    int x;

    // convert earth weight to planets
    std::cout << "Please enter your current earth weight: " << std::endl;
    std::cin >> weight; // input by user from weight variables

    // planet information
    std::cout << "\nInformation for the following planets: \n\n";
    std::cout << "1. Venus 2. Mars 3. Jupiter \n";
    std::cout << "4. Saturn 5. Uranus 6. Neptune \n";

    // x variable as input from user
    std::cout << "Please enter the number of the planet you want to convert to: " << std::endl;
    std::cin >> x;

    // condition for each planet
    if (x == 1)
    {
        weight = weight * 0.78; // weight on venus
    }
    else if (x == 2)
    {
        /* code */
        weight = weight * 0.39; // weight on mars
    }
    else if (x == 3)
    {

        weight = weight * 2.65;
    }
    else if (x == 4)
    {

        weight = weight * 1.17;
    }
    else if (x == 5)
    {

        weight = weight * 1.05;
    }
    else if (x == 6)
    {

        weight = weight * 1.23;
    }

    // print weight on planet
    std::cout << "Your weight on the planet is: " << weight << std::endl;
    return 0;
}