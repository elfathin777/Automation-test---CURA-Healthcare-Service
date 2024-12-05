const {By, Builder, Browser, Key, until} = require('selenium-webdriver');
const assert = require("assert");

async function start() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  
  try {
    await driver.get('https://katalon-demo-cura.herokuapp.com/');
    
    // Klik tombol "Make Appointment"
    await driver.findElement(By.id('btn-make-appointment')).click();
    
    // Menemukan elemen input untuk username dan password, lalu mengisi dengan kredensial
    await driver.findElement(By.id('txt-username')).sendKeys('John Doe'); // Ganti 'John Doe' dengan username Anda
    await driver.findElement(By.id('txt-password')).sendKeys('ThisIsNotAPassword'); // Ganti 'ThisIsNotAPassword' dengan password Anda
    
    // Menemukan tombol login dan mengkliknya
    await driver.findElement(By.id('btn-login')).click();

    // Tunggu hingga halaman appointment muncul
    await driver.wait(until.elementLocated(By.id('appointment')), 10000);

    // Verifikasi bahwa login berhasil dengan memeriksa teks tertentu di halaman appointment
    let appointmentText = await driver.findElement(By.css('h2')).getText();
    assert.strictEqual(appointmentText, 'Make Appointment', "Teks tidak sesuai, login mungkin gagal");

    console.log("Login berhasil, teks 'Make Appointment' ditemukan");
    await driver.quit()

  } finally {
    // await driver.quit(); // Komentar atau hapus baris ini untuk mencegah driver menutup
  }
}

start();