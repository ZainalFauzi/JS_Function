//soal 1-----------------------------------------
const tokoOnline = (pembeli, produk) => {
  console.log("terima kasih " + pembeli, "telah membeli " + produk);
};
tokoOnline("bebek", "kolam");

//soal 2----------------------------------------------------
const kaliSembilanPerLima = (number1) => {
  return number1 * (9 / 5);
};

const getFahrenheit = (celcius) => {
  console.log("menjadi ", kaliSembilanPerLima(celcius) + 32, " fahrenheit");
};

getFahrenheit(15);

const kurangTigaPuluhDua = (number2) => {
  return number2 - 32;
};

const getCelcius = (fahrenheit) => {
  console.log("menjadi ", (kurangTigaPuluhDua(fahrenheit) * 5) / 9, " celcius");
};

getCelcius(32);

//soal 3-----------------------------------------------------
let umurKucing = (umur) => {
  if (umur == 1) {
    console.log(15);
  } else if (umur == 2) {
    console.log(24);
  } else if (umur > 2) {
    console.log(16 + umur * 4);
  }
};
umurKucing(4);

//soal 4-------------------------------------------------
let convert = (original) => original.toLowerCase();
convert("UPPERCASE TO LOWERCASE")