// ==== Logic Challenge - Number Palindrome ====
/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
*/

// Cara Manual

function angkaPalindrome(num) {
    for(; true;){
      num++
    
    let palNum = num.toString()
    let tempReverse = ''
  
      for(let i = palNum.length-1; i >= 0; i--){
        tempReverse += palNum[i]
      }
      
      if(palNum == tempReverse){
        return num
      }
    }
  }
    
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
  
// Cara Cepat
  
function angkaPalindrome(num) {
    for (; true;){
        num++
  
        let palNum = num.toString().split('').reverse().join('')
      
        if(num == palNum){
            return num
        }
    }
}
  
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001  