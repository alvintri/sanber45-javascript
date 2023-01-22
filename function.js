//Fungsi jenis 1
function namaFungsi(){
    console.log("Hello World! 1");
}

//Fungsi jenis 2
var namaFungsi2 = function(){
    console.log("Hello World!2");
}

//Fungsi jenis 3
var namaFungsi3 = () => {
    console.log("Hello World! 3");
    }
    
    
// atau seperti ini (jika isi fungsi hanya satu baris):
    var namaFungsi4 = () => console.log("Hello World!");


var namaFungsi = new Function('console.log("Hello World!");');

function fungsibagi(a,b){
    let c = a/b
    console.log("Hasil bagi a dan b adalah " + c)
}

function bagi(a,b){
    let hasilBagi = a / b;
    return hasilBagi;
}

let hasilBagi = bagi(4,2)
console.log(hasilBagi)

function getPetStore(id){
    //hit api url by id sebelum post
}

let id = postPetStore()
getPetStore(id)