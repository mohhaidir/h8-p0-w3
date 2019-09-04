// ==== Logic Challenge - Palindrome ====
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// - Cara Manual -
function palindrome(kata) {
    let panjangKata = kata.length-1
    
    for (let i = 0; i <= panjangKata; i++) { 
        if (i != panjangKata - i) { // jika i(0-panjang kata) tidak sebanding dengan (panjangkata-0)
            if (kata[i] != kata[panjangKata - i]) { // kata dengan value i(k) tidak sebanding dengan(k)
                return false
            } 
        } 
    }
    return true
}
    
console.log(palindrome('katak'));       // true
console.log(palindrome('taat'));        // true
console.log(palindrome('blanket'));     // false
console.log(palindrome('civic'));       // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister'));      // false
console.log(palindrome('makam'));       // true
console.log(palindrome('gigi'));        // false
console.log(palindrome('tamak'));       // false

// - Cara Cepat (Method Reverse) -

function palindrome(kata) {  
    var palWord = 
        kata.toLowerCase()
        .split('')
        .reverse()
        .join('')
  
        return kata === palWord
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('makam')); // true
console.log(palindrome('gigi')); // false
console.log(palindrome('tamak')); // false
console.log(palindrome('tunai')); //  false