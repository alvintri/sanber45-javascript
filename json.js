const response = {
	testing : 1234,
	aset : {
		rumah : "andara",
		rekasadana : "bibit",
		kendaraan : ["avanza","mio"]
		} 
} 



//printKendaraan(response)
module.exports = new printKendaraan(data)
    for(let i=0; i<data.aset.kendaraan.length;i++ ){
        let asetKendaraan = data.aset.kendaraan[i]
        console.log("kendaraan ke " + i + " adalah : " + asetKendaraan)
    }
;

console.log(response.aset.rekasadana)