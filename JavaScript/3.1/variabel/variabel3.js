//Operator Logika
let umur = 16;
let punyaKTP = false;
let gabolehMasuk = umur >= 17 && punyaKTP;
console.log(gabolehMasuk)

//Operator OR(||)
const usia = 60;
const anggota = false;
const mendapatkanDiskon = usia >= 55 || anggota === true;
console.log(mendapatkanDiskon);

//Operator NOT (!)
const sedangLibur = false;
console.log(!sedangLibur);

const sudahLogin = false;
if (!sudahLogin) {
console.log("Silahkan login terlebih dahulu.");
}
