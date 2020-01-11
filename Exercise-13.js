// ==== Logic Challenge - Target Terdekat ====
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

// - Cara Hardcode -

function targetTerdekat(arr) {
    let loc = [
        [],
        []
    ];
    //mapping lokasi o dan x
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            loc[0].push(i)
        } else if (arr[i] === 'x') {
            loc[1].push(i)
        }
    }
    //hitung jarak terdekat
    let shortest = arr.length
    for (i = 0; i < loc[0].length; i++) {
        for (let j = 0; j < loc[1].length; j++) {
            let temp = Math.abs(loc[0][i] - loc[1][j])
            if (shortest > temp) {
                shortest = temp
            }
        }
    }
    //jika tidak ada x atau o, return 0
    return (loc[1].length > 0 && loc[0].length > 0) ? shortest : 0
}

// // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1