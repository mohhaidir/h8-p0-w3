// ==== Logical Challange Mengelompokkan Hewan ====
/*
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [[ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ]]
Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

function groupAnimals(animals) {
    // animals = animals.sort()
    // const result = []
    // let temp = []

    // for (let i = 0; i < animals.length; i++) {

    //     if (i == animals.length - 1) {
    //         temp.push(animals[i])
    //         result.push(temp)
    //     } else {
    //         if (animals[i][0] == animals[i + 1][0]) {
    //             temp.push(animals[i])
    //         } else {
    //             temp.push(animals[i])
    //             result.push(temp)
    //             temp = []
    //         }
    //     }
    // }
    // return result
    for (let i = 0; i < animals.length; i++) {
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i] < animals[j]) {
                let temp = animals[j]
                animals[j] = animals[i]
                animals[i] = temp
            }
        }
    }
    let result = []
    let temp = []
    for (let k = 0; k < animals.length; k++) {
        if (temp.length == 0) {
            temp.push(animals[k])
        } else if (animals[k][0] == animals[k - 1][0]) {
            temp.push(animals[k])
        } else if (animals[k][0] != animals[k - 1][0]) {
            result.push(temp)
            temp = []
            temp.push(animals[k])
        }
    }
    result.push(temp)
    return result.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]