// soal 1
console.log('----- SOAL 1 -----')
let luasLingkaran =  (r) => {
    const p = 3.14;
    return r*r*p;
}

console.log('luas lingkaran dengan jari-jari 5cm');
console.log(luasLingkaran(5)+ 'cm');
console.log(' ');

let kelilingLingkaran = (r) => {
    const p = 3.14
    return r*2*p;
}

console.log('keliling lingkaran dengan jari-jari 5cm');
console.log(kelilingLingkaran(5)+ 'cm');
console.log(' ');
console.log('----- SOAL 2 -----')
let kalimat = ''
let kata1 = 'saya'
let kata2 = 'adalah'
let kata3 = 'seorang'
let kata4 = 'frontend'
let kata5 = 'developer'

let tambahKalimat = () => {
    kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
    return kalimat
}

tambahKalimat(kata1, kata2, kata3, kata4, kata5);
console.log(kalimat)
console.log(' ');
console.log('----- SOAL 3 -----')
class Book{
    constructor(name, totalPage, price){
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful){
        super(name, totalPage, price)
        this.isColorful = isColorful    
    }
}

let mekanika = new Book('mekanika', 500, 300000)
let kalkulus = new Book('kalkulus', 600, 350000,)
let shinchan = new Komik('shinchan', 50, 30000, true)


console.log(mekanika)
console.log(kalkulus)
console.log(shinchan)


