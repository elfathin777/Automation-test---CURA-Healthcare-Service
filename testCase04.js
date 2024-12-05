// Login without entering username and password

const {By, Builder, Browser, Key, until} = require('selenium-webdriver');
const assert = require("assert");

async function start() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
        // Memasukkan halaman website yang akan di testing
        await driver.get('https://katalon-demo-cura.herokuapp.com/');
        
        // Klik tombol "Make Appointment"
        await driver.findElement(By.id('btn-make-appointment')).click();
        
        // Menemukan elemen input untuk username dan password, lalu mengisi dengan kredensial
        await driver.findElement(By.id('txt-username')).sendKeys('');
        await driver.findElement(By.id('txt-password')).sendKeys('');
        
        // Menemukan tombol login dan mengkliknya
        await driver.findElement(By.id('btn-login')).click();

        // Verifikasi bahwa login gagal dengan memeriksa teks tertentu di elemen tersebut
        let errorText = await driver.findElement(By.css('.text-danger')).getText();
        assert.strictEqual(errorText, 'Login failed! Please ensure the username and password are valid.', "Teks tidak sesuai, login mungkin gagal");
        await driver.sleep(10000);
        
        console.log("Login without username and password, passed");
        await driver.quit();
}

start();