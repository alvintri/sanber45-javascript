const asetKendaraan = require('./json.js')

const response = {
	testing : 7823,
	aset : {
		rumah : "turangga",
		rekasadana : "bareksa",
		kendaraan : ["avanza","mio","bmw","yaris"]
		} 
} 

asetKendaraan.printKendaraan(response)