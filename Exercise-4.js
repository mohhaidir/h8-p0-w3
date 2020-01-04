// ==== Menggunakan Built-in Function pada Array ====
/*
Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. 
Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. 
Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.
*/
// Menggunakan Built-in Function pada Array

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])

function dataHandling2(params){

  params.splice(1, 1, "Roman Alamsyah Elsharawy")
  params.splice(2, 1, "Provinsi Bandar Lampung")
  params.splice(4, 1, "Pria", "SMA Internasional Metro")
  
  console.log(params)

  var tanggal = params[3].split('/') // array berisi ['21', '05', '1989']
  var temp = [] // variable array kosong

  for (var i = 0; i < tanggal.length; i++) { // perulangan sebanyak panjang tanggal
    
    if (temp.length == 0 ) { // jika temp panjangnya 0 maka
      temp.push(tanggal[i]) // push temp dengan tanngal urutan ke i

    } else { // jika tidak
      if (Number(temp[0]) > Number(tanggal[i])){ // jika Number(temp urutan ke 0) lebih besar dari Number(tanggal urutan ke i) maka
        temp.push(tanggal[i]) // push temp dengan tanggal urutan ke i
      
      } else { // jika tidak
        temp.unshift(tanggal[i]) // unshift temp dengan tanggal urutan ke i
      }
    }
  }

  console.log(temp) // tampilkan temp
  console.log(temp.join('-'))

  var bulan = 05
  switch(bulan) {
    case 01: {bulan = "Januari"}; break;   
    case 02: {bulan = "Februari"}; break;
    case 03: {bulan = "Maret"}; break;
    case 04: {bulan = "April"}; break;
    case 05: {bulan = "Mei"}; break;
    case 06: {bulan = "Juni"}; break;
    case 07: {bulan = "Juli"}; break;
    case 08: {bulan = "Agustus"}; break;
    case 09: {bulan = "September"}; break;
    case 10: {bulan = "Oktober"}; break;
    case 11: {bulan = "November"}; break;
    case 12: {bulan = "Desember"}; break;

    default:
  }
  console.log(bulan);
  var maxCharName = params[1]
  console.log(maxCharName.slice(0, 14))
}