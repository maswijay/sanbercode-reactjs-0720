// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + ' ' + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + ' ' + kataKetiga + ' ' + kataKeempat.toLocaleUpperCase());

// soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat));

// soal 3

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0,3);
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


// soal 4

var nilai= 79;

if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70) {
    console.log("B")
} else if (nilai >= 60) {
    console.log("C")
} else if (nilai >= 50) {
    console.log("D")
} else {
    console.log("E")
}

// soal 5

var tanggal = 30;
var bulan = 11;
var tahun = 1995;


switch(bulan) {
  case 1:   { bulanLahir = 'Januari'; break; }
  case 2:   { bulanLahir = 'Februari'; break; }
  case 3:   { bulanLahir = 'Maret'; break; }
  case 4:   { bulanLahir = 'April'; break; }
  case 5:   { bulanLahir = 'Mei'; break; }
  case 6:   { bulanLahir = 'Juni'; break; }
  case 7:   { bulanLahir = 'Juli'; break; }
  case 8:   { bulanLahir = 'Agustus'; break; }
  case 9:   { bulanLahir = 'September'; break; }
  case 10:   { bulanLahir = 'Oktober'; break; }
  case 11:   { bulanLahir = 'November'; break; }
  case 12:   { bulanLahir = 'Desember'; break; }
  default:  { bulanLahir = 'Unknown'; }}

console.log('Tanggal lahir saya adalah ' + tanggal + ' ' + bulanLahir + ' ' + tahun);