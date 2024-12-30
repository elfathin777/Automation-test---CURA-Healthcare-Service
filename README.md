# Automation Testing with Selenium

Proyek ini berisi skrip pengujian otomatisasi menggunakan Selenium WebDriver untuk menguji fitur login dan manajemen persediaan di aplikasi Jubelio.

## Prasyarat

Sebelum memulai, pastikan Anda memiliki hal-hal berikut terinstal di sistem Anda:

- [Node.js](https://nodejs.org/) (versi terbaru direkomendasikan)
- [npm](https://www.npmjs.com/get-npm) (biasanya sudah terinstal dengan Node.js)

## Instalasi

1. **Clone Repository**

   Clone repository ini ke mesin lokal Anda:

   ```bash
   https://github.com/elfathin777/FinalTask_Jubelio_QA.git
   git clone https://github.com/elfathin777/FinalTask_Jubelio_QA.git
   cd FinalTask_Jubelio_QA
   ```

2. **Instal Dependensi**

   Instal semua dependensi yang diperlukan menggunakan npm:

   ```bash
   npm install
   ```

   Ini akan menginstal `selenium-webdriver`, `mocha`, `chromedriver`, dan dependensi lainnya yang tercantum dalam `package.json`.

## Menjalankan Pengujian

1. **Jalankan Pengujian**

   Gunakan perintah berikut untuk menjalankan pengujian menggunakan terminal:

   ```bash
   node TestSelenium/loginCase
   node TestSelenium/inventory
   ```

2. **Hasil Pengujian**

   Setelah pengujian selesai, Anda akan melihat hasilnya di terminal. Pastikan semua tes lulus tanpa kesalahan.

## Catatan

- Pastikan browser Chrome terinstal di sistem Anda, karena pengujian menggunakan ChromeDriver.
- Jika Anda mengalami masalah dengan versi ChromeDriver, pastikan versi ChromeDriver sesuai dengan versi Chrome yang terinstal.
