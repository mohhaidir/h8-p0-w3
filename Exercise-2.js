// ==== Mengakses Nilai Dalam Array ====
/*
Tahukah kamu jika string adalah sebuah array? Kamu dapat mengakses karakter-karakter pada sebuah string layaknya mengakses nilai pada sebuah array. 
Untuk membuktikannya, kerjakanlah tantangan ini!
Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
*/

function balikString(str) {
  let temp = []
  for (let i = str.length-1; i >= 0; i--){
    temp.push(str[i])
  }
  return temp.join('')
}
balikString("Hello Wolrd!")