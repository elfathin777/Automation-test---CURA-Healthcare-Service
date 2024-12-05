// Login with incorrect username and correct password

const {By, Builder, Browser, Key, until} = require('selenium-webdriver');
const assert = require("assert");

async function start() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://katalon-demo-cura.herokuapp.com/');
        
        // Click Button "Make Appointment"
        await driver.findElement(By.id('btn-make-appointment')).click();
        
        // Finds input elements for username and password, then populates them with credentials
        await driver.findElement(By.id('txt-username')).sendKeys('falseusername');
        await driver.findElement(By.id('txt-password')).sendKeys('ThisIsNotAPassword');
        
        // Menemukan tombol login dan mengkliknya
        await driver.findElement(By.id('btn-login')).click();

        // Verifikasi bahwa login gagal dengan memeriksa teks tertentu di elemen tersebut
        let errorText = await driver.findElement(By.css('.text-danger')).getText();
        assert.strictEqual(errorText, 'Login failed! Please ensure the username and password are valid.', "Teks tidak sesuai, login mungkin gagal");
        await driver.sleep(10000);

        console.log("Login with incorrect username and correct password, passed");
        await driver.quit();
}
start();