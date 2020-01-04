// ==== Logic Challenge - Target Terdekat ====
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

// - Cara Hardcode -

function targetTerdekat(arr) {
    let counterStatus = false // hasil dimana index 'x' array ditampung
    let checkLast = '' // hasil dimana index 'o' array ditampung
    let counter = 0

    for (let i = 0; i < arr.length; i++) { // looping dilakukan sesuai panjang array
        if (counterStatus) {
            counter++
        }

        if (arr[i] == 'o' && !counterStatus) {
            checkLast = 'o'
            counterStatus = true
        }

        if (arr[i] == 'x' && counterStatus) {
            checkLast = 'x'
            return counter
        }
    }

    if (checkLast) {
        counter = 0
        counterStatus = false

        for (let i = arr.length - 1; i >= 0; i--) {

            if (counterStatus) {
                counter++
            }

            if (arr[i] == 'o' && !counterStatus) {
                checkLast = 'o'
                counterStatus = true
            }

            if (arr[i] == 'x' && counterStatus) {
                checkLast = 'x'
                return counter
            }
        }
    }
    return 0 // jika tidak ada pasangan maka return 0
}

// // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1