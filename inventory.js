const { By, Builder, Browser, until } = require('selenium-webdriver');

async function loginWithCorrectCredentials() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://app2.jubelio.com/login');
        
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/div[1]/div/input')), 15000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/div[1]/div/input')).sendKeys('qa.rakamin.jubelio@gmail.com');
        
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/div[2]/div/input')), 15000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/div[2]/div/input')).sendKeys('Jubelio123!');
        
        // Tunggu tombol login muncul dan klik
        await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/button')), 15000);
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/div/div[2]/div/form/button')).click();

        // Verifikasi bahwa login berhasil dengan memeriksa elemen tertentu yang hanya muncul setelah login
        await driver.wait(until.elementLocated(By.id('dashboard')), 15000);
        console.log("Login with correct username and password, passed");
    } catch (error) {
        console.error("Terjadi kesalahan saat login:", error);
    } 
    
    //email dan password salah sehingga tidak bisa mengeksplor halaman inventory
    
    
    finally {
        await driver.quit();
    }
}

loginWithCorrectCredentials();