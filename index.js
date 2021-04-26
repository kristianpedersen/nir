const fs = require("fs");

const nirKodegruppe = 8;
const socioKodegruppe = 25026;
const lopenummer = 51;

const result = JSON.parse(fs.readFileSync("./nirkoder2021.json", "utf-8")).Result;
const filtered = result.filter(nir => nir.Kodeverk === nirKodegruppe);

filtered.forEach((nirkode, i) => {
	const { Navn, Kode, Beskrivelse } = nirkode;
	const CSVLinje = `${socioKodegruppe},${lopenummer + i},0,"2021 - ${Navn}",0,0,3,0,"${Kode}","${Beskrivelse}",0,0,0,0,0`;
	console.log(CSVLinje);
});