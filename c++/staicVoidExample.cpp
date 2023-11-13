#include <stdio.h>

static void staticFunc(void)
{
    printf("Inside the static function staticFunc() ");
}

int main()
{
    staticFunc();
    return 0;
}