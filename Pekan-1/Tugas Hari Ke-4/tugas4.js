// soal 1
console.log('// Soal 1')

var nilai = 2;

console.log("LOOPING PERTAMA")
while(nilai <= 20) {
    console.log( nilai + ' - I Love Coding');
    nilai += 2;
}

var nilaiMax = 20

console.log("LOOPING KEDUA")
while(nilaiMax >= 2) {
    console.log( nilaiMax + ' - I will become a frontend developer');
    nilaiMax -= 2;
}
console.log('//...jawaban 1')
console.log()
// soal 2
console.log('// Soal 2')
var nilai = 1

for(nilai = 1; nilai <= 20; nilai ++) {
    if (nilai % 2 == 0) {
        console.log(nilai + ' - Berkualitas')
    } else if (nilai % 3 == 0) {
        console.log(nilai + ' - I Love Coding')
    } else {
        console.log(nilai + ' - Santai')
    }
}
console.log('//...jawaban 2')
console.log()
// soal 3
console.log('// Soal 3')
var tagar = ["#"]

for(tagar.length = 1; tagar.length <= 7; tagar.push('#')) {
    console.log(tagar.join(""))
}
console.log('//...jawaban 3')
console.log()
// soal 4
console.log('// Soal 4')

var kalimat="saya sangat senang belajar javascript"
var kalimatArray = kalimat.split(" ")

console.log(kalimatArray)
console.log('//...jawaban 4')
console.log()
// soal 5
console.log('// Soal 5')
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
var jumlahBuah = 4;

for(i=0; i<=jumlahBuah; i++) {
    console.log(daftarBuah[i]);
}
console.log('//... jawaban 5')