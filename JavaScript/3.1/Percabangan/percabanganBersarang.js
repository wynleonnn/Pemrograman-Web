const sudahLogin = true;
const role = "admin";

if (sudahLogin){
if(role === "admin") {
    console.log("Selamat Datang Di Halaman Admin!");
}else{
    console.log("Selamat Datang Di Halaman User!");
}
}else{
    console.log("Silahkan Login Terlebih Dahulu!");
}

// tapi bisa di persingkat dengan codingan seperti ini

if(sudahLogin && role === "admin") {
    console.log("Selamat Datang Di Halaman Admin!");
}