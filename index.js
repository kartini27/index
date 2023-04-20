const promptSync = require('prompt-sync');//dari npm
const {matematika}= require('./matematika');//dari project kita
const {jumlah,kurang,kali,bagi} = require ('./matematika');

const prompt = promptSync()
const op = prompt('mau operasi apa?');
const angka1 = parseInt(prompt('masukkan angka  1:'));
const angka2 = parseInt(prompt('masukkan angka 2:'));


let hasil = 0;
if(op =='jumlah'){
    hasil = matematika.jumlah(angka1,angka2);
}else if(op== 'kurang'){
    hasil = matematika.kurang(angka1,angka2);
}else if(op== 'kali'){
    hasil = matematika.kali(angka1,angka2,);
}else if(op== 'bagi'){
    hasil = matematika.bagi(angka1,angka2);
}else {
    console.log('bukan operasi');
}
    console.log('hasilnya adalah;',hasil);    
