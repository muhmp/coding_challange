// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public String solution(int a, int b, int c) { //change parameter to a ,b ,c
        // write your code in Java SE 8
   
    //define variables
    int total=a+b+c;
    int A=0, B=0, C=0; //define the character to assume we can total the sum of the character

    //define mutable sequence of characters
    StringBuilder textSB = new StringBuilder();
    
    while (total -- > 0){ //condition of total >0
        if ((a >= b && a>=c && A!=2) || (a>0 && (B==2|| C==2))){ //if condition is not equal or A>0
            textSB.append("a"); //concate string w append method
            a--; //string decrement for a
            A++; //increment A so the value fulfilled
            B=C=0;
        } 
        else if ((b >= a && b >= c && B!=2) || (b > 0 && (A ==2 || C==2))){ //condition for b 
                textSB.append("b");;
                b--; //string decrement for b
                B++; //increment 
                A=C=0;
            }
            else if ((c >= a && c>=b && C != 2) || (c >0 && ( A==2 || B==2))){ //condition for C
                    textSB.append("c");
                    c--;
                    C++;
                    A=B=0;
                }
    }
    return textSB.toString(); //return the mutable textSBsequence as string format 
    }
}

