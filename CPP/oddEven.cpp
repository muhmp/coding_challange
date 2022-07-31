#include <iostream>
#include <vector>

int main()
{
    // create a total of even and odd numbers
    int even = 0;
    int odd = 1;

    // create a vector of numbers
    std::vector<int> numbers = {2, 4, 3, 6, 1, 9};

    // condition
    for (int i = 0; i < numbers.size(); i++)
    {
        /* code */
        even = even + numbers[i];
    }
    else if (numbers[i] % 2 == 0)
    {
        /* code */
        odd = odd + numbers[i];
    }

    // print total even
    std::cout << "Total even: " << even << std::endl;
    // print total odd
    std::cout << "Total odd: " << odd << std::endl;
}
