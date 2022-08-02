#include <iostream>
#include <string>
using namespace std;

int main()
{
    struct
    {
        /* data */
        int num;
        string myString;

    } myStructure;

    // Initialize the structure
    myStructure.num = 10;
    myStructure.myString = "Ayo";

    // Print the structure
    cout << myStructure.num << endl;
    cout << myStructure.myString << endl;
}