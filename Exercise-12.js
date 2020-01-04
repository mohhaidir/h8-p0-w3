// ==== Logical Challange Tentukan Deret Geometri ====
/*
Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. 
Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. 
Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
*/

function tentukanDeretGeometri(arr) {
    let temp = 0

    for (let i = arr.length - 1; i > 0; i--) {
        //console.log(arr[i] / arr[i-1], '-proses->')

        if (temp == 0) {
            temp = (arr[i] / arr[i - 1])
        } else if (temp != (arr[i] / arr[i - 1])) {
            return false
        }
    }
    // console.log(temp,'=temporary=>')
    return true
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

// Cara Lain

function tentukanDeretGeometri(arr) {
    let initiate = arr[1] / arr[0]
    let result = true

    for (let i = arr.length - 1; i > 0; i--) {
        if (initiate != arr[i] / arr[i - 1]) {
            result = false
        }
    }
    return result
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false