//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let table1 = [
    [1000,"M","MM","MMM"],
    [100,"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    [10,"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    [1,"I","II","III","IV","V","VI","VII","VIII","IX"]
  ]

  /**
  * Determine a Roman numeral from a decimal number
  *
  * @param {number} number
  * @returns {string} roman
  */
  export function toRoman(number) {
   let roman = ""
    for (let j = 0; j < table1.length; j++) {
     for (let i = 1; i < table1[j].length; i++) {
       if(parseInt((number % (10*table1[j][0]))/table1[j][0])=== i){
        roman+=table1[j][i];break
       }}
    } return roman}
  