console.log('----- SOAL 1 -----')
console.log(' ')

function halo() {
    return 'Halo Sanbers!';
}

console.log(halo());

console.log(' ')
console.log('----- SOAL 2 -----')
console.log(' ')

function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan (num1, num2)
console.log(hasilKali)

console.log(' ')
console.log('----- SOAL 3 -----')
console.log(' ')

function introduce(name, age, address, hobby) {
    return 'Nama saya '+ name +', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby +'!'
}

var name = 'John'
var age = 30
var address = 'Jalan belum jadi'
var hobby = 'Gaming'

console.log(introduce( name, age, address, hobby))