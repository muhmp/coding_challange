function intToRoman(num) {
  // Create a lookup table for the Roman numerals
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "";

  // Loop through the lookup table and add the corresponding Roman numeral for each value
  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }

  return roman;
}

// Example usage
console.log(intToRoman(10));  // Output: X