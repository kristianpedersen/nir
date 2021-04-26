const fs = require("fs");

const nirKodegruppe = 15;
const socioKodegruppe = 25023;
const lopenummer = 51;

JSON.parse(fs.readFileSync("./nirkoder2021.json", "utf-8")).Result
	.filter(nir => nir.Kodeverk === nirKodegruppe)
	.forEach((nirkode, i) => {
		const { Navn, Kode, Beskrivelse } = nirkode;
		const CSVLinje = `${socioKodegruppe},${lopenummer + i},0,"2021 - ${Navn}",0,0,3,0,"${Kode}","${Beskrivelse}",0,0,0,0,0`;
		console.log(CSVLinje);
	})