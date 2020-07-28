var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function bacaBuku(waktu, index) {
    readBooksPromise(waktu, books[index])
        .then(function(sisaWaktu){
            console.log(sisaWaktu)
            if (index + 1 < books.length) {
                bacaBuku(sisaWaktu, index + 1)
            }            
        })
        .catch(function (sisaWaktu){
            console.log(sisaWaktu)
        })
}

bacaBuku(10000, 0)