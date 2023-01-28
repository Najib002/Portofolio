/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(uang, hargaMakanan, historyPembelian) {
    // Write your code here
    let tabungan = {};
    let totalTabungan = 0;
    let history = historyPembelian.split(".");
    for (let i = 0; i < history.length; i++) {
        let data = history[i].split("-");
        let hari = data[0];
        let makanan = data[1].split(",");
        let harga = 0;
        for (let j = 0; j < makanan.length; j++) {
            for (let k = 0; k < hargaMakanan.length; k++) {
                if (makanan[j] === hargaMakanan[k].nama) {
                    harga += hargaMakanan[k].harga;
                }
            }
        }
        tabungan[hari] = uang - harga;
        totalTabungan += tabungan[hari];
    }
    tabungan["TotalTabungan"] = totalTabungan;
    return tabungan;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000
  },
  {
    nama: "nasi",
    harga: 2000
  },
  {
    nama: "cola",
    harga: 1000
  },
  {
    nama: "chiki",
    harga: 1500
  },
  {
    nama: "hotdog",
    harga: 3000
  },
  {
    nama: "aqua",
    harga: 2000
  }
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(10000, hargaMakanan, historyPembelian))