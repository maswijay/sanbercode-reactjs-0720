function tampilkanBintang(jumlahBintang) {
    for(var i = jumlahBintang; i>=1; i--) {
        var x = '';
        for(var j = 1; j<=i; j++) {
            x = x + '*';
        }
        console.log(x);
    }
    return x
}
console.log(tampilkanBintang(15))
