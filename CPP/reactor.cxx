// package
#include <thread>
#include <vector>
#include <algorithm>
#include <cstdio>
#include <cstring>

// create word structure contain data as char amd count
struct Word
{
    char *data;
    int count;

    // constructor
    Word(char *data_) : data(::strdup(data_))
    {
    }

    // destructor
    Word() : data((char *)"")
    {
    }

    // define a comparator for the Word struct
    // s_wordsArray is the array of words to be sorted
    static std::vector<Word *> s_wordsArray;
    static Word s_word;
    static int s_totalFound;
}