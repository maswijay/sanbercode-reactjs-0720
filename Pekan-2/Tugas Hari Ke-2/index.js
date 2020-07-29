// di index.js
var readBooks = require('./callback.js')
var sisaWaktu = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function bacaBuku(time, index) {
    readBooks(time, books[index], function(sisaWaktu) {
        console.log(sisaWaktu);
        if (index + 1 < books.length) {
            bacaBuku(sisaWaktu, index + 1)
        } else {
            console.log('waktu sudah habis.')
        }
    });
}
bacaBuku(10000, 0)
