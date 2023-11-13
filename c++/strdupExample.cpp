#include <stdio.h>
#include <string.h>

// helloworld with strdup in c++
int main(
    int argc,
    char *argv[])
{
    char *str = strdup("hello world");
    printf("%s\n", str);
    free(str);
    return 0;
}
)