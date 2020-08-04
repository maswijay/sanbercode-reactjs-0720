let pesertaLomba= [
    ["Budi", "Pria", "172cm"], 
    ["Susi", "Wanita", "162cm"], 
    ["Lala", "Wanita", "155cm"], 
    ["Agung", "Pria", "175cm"]
]

var arrofobjs = pesertaLomba.map(function(x) { 
    return { 
        nama: x[0], 
        gender: x[1],
        tinggi: x[2]
    }; 
});
console.log(arrofobjs);

// ------------------------------------------------------

let warna = ['biru', 'merah', 'kuning', 'hijau']

let dataBukuTambahan = {
    penulis: 'john doe',
    tahunTerbit: 2020
}

let buku = {
    nama: 'pemrograman dasar',
    jumlahHalaman: 172,
    warnaSampul: ['hitam']
}

// ---------------------------------------------------

// buatlah arrow function volume balok dan kubus, gunakan rest parameter di parameter functionnya. lalu tampilkan hasil perhitungannya dengan template literal 
let pBalok1 = 5;
let lBalok1 = 4;
let tBalok1 = 3;

const volumeBalok = (p, l, t) => {
    return p*l*t
}

var volumeBalok1 = volumeBalok(pBalok1, lBalok1, tBalok1);
console.log(volumeBalok1)

let sKubus1 = 5;

const volumeKubus = (s) => {
    return s*s*s
}

var volumeKubus1 = volumeKubus(sKubus1);
console.log(volumeKubus1)