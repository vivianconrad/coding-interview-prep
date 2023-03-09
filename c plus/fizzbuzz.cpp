#include <iostream>

int main() {
  
  for (int i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            std::cout << "FizzBuzz\n";
        } else if (i % 3 == 0) {
            std::cout << "Fizz\n";
        } else if (i % 5 == 0) {
            std::cout << "Buzz\n";
        } else {
            std::cout << i << "\n";
        }
    
    int n = 10;

    // print numbers from 1 to n
    for (int i = 1; i <= n; i++) {
        std::cout << i << " ";
    }
    std::cout << "\n";

    // print even numbers from 1 to n
    for (int i = 2; i <= n; i += 2) {
        std::cout << i << " ";
    }
    std::cout << "\n";

    // print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both
    for (int i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            std::cout << "FizzBuzz ";
        } else if (i % 3 == 0) {
            std::cout << "Fizz ";
        } else if (i % 5 == 0) {
            std::cout << "Buzz ";
        } else {
            std::cout << i << " ";
        }
    }
    std::cout << "\n";

    return 0;
}
