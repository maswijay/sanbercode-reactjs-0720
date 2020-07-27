// Soal 1
console.log(' ')
console.log('----- SOAL 1 -----')
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objectDaftarPerserta = {
    nama : "Asep",
    jenisKelamin : "laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992,
}
console.log(objectDaftarPerserta)

// Soal 2
console.log(' ')
console.log('----- SOAL 2 -----')
var buah = [
    {nama: "Strawberry", warna: "merah", adaBijinya: "tidak", harga: 9000},
    {nama: "Jeruk", warna: "oranye", adaBijinya: "ada", harga: 8000},
    {nama: "Semangka", warna: "hijau & merah", adaBijinya: "ada", harga: 10000},
    {nama: "Pisang", warna: "kuning", adaBijinya: "tidak", harga: 5000},
]
console.log(buah[0])

// Soal 3
console.log(' ')
console.log('----- SOAL 3 -----')
var dataFilm = []
function tambahData(nama, durasi, genre, tahun) {
    var film = {}
    film.nama = nama,
    film.durasi = durasi,
    film.genre = genre,
    film.tahun = tahun,
        dataFilm.push(film)
}
tambahData('Gundala', '123 menit', 'Laga', 2019)
console.log(dataFilm)

// Soal 4
console.log(' ')
console.log('----- SOAL 4 -----')
// release 0
class Animal {
    constructor(name) {
        this._name = name
        this._legs = 4
        this._cold_blooded = false
    }
}

var sheep = new Animal("shaun");

console.log(sheep._name);
console.log(sheep._legs);
console.log(sheep._cold_blooded);

// release 1
class Ape extends Animal {
    constructor(name) {
        super(name);        
    }
    yell() {
        return "Auooo"
    }
    get legs() {
        return this._legs
    }
    set legs(kaki) {
        this._legs = kaki
    }
    
}
var sungokong = new Ape("kera sakti")
sungokong.legs = 2;

console.log(' ')
console.log(sungokong._name);
console.log(sungokong._legs);
console.log(sungokong._cold_blooded)
console.log(sungokong.yell())

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        return "hop hop"
    }
}
var kodok = new Frog("buduk")
console.log(' ')
console.log(kodok._name);
console.log(kodok._legs);
console.log(kodok._cold_blooded)
console.log(kodok.jump())


// Soal 5
console.log(' ')
console.log('----- SOAL 5 -----')
class Clock {
    constructor({template}){
        // Code di sini
            var timer;

        function render() {
            var date = new Date();
            
            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

            console.log(output);
        }

        this.stop = function() {
            clearInterval(timer);
        };

        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        };
    };
        
}
var clock = new Clock({template: 'h:m:s'});
clock.start(); 