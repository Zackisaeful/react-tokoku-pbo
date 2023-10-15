const fs = require('fs'); 

const optionOneSurvey = [
  { id: 1, kategori: "makanan", img_url: "example-kategori-image/makanan.jpg" },
  {
    id: 2,
    kategori: "handphone dan tablet",
    img_url: "example-kategori-image/handphoneDanElectronik.jpg",
  },
  {
    id: 3,
    kategori: "komputer dan electronik",
    img_url: "example-kategori-image/komputer.jpg",
  },
  { id: 4, kategori: "minuman", img_url: "example-kategori-image/minuman.jpg" },
  { id: 5, kategori: "minuman", img_url: "example-kategori-image/minuman.jpg" },
  { id: 6, kategori: "minuman", img_url: "example-kategori-image/minuman.jpg" },
  { id: 7, kategori: "minuman", img_url: "example-kategori-image/minuman.jpg" }
  ];
  
  function unikId(dataJson) {
    let index = 1;
    for (let obj of dataJson) {
      obj.id = index++;
    }
    return JSON.stringify(dataJson);
  }
  
  const resultObject = unikId(optionOneSurvey);
  console.info(resultObject);
  
  // Path ke file tujuan
const outputPath = '../frontend/public/dataKategori.json';

// Menulis hasil ke dalam file
fs.writeFile(outputPath, resultObject, 'utf8', (err) => {
  if (err) {
    console.error('Terjadi kesalahan saat menulis ke file:', err);
  } else {
    console.log('Data berhasil ditulis ke file:', outputPath);
  }
});