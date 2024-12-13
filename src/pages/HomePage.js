const { expect,test } = require("allure-playwright")

exports.HomePage=
class HomePage{

    constructor(page)
    {
        this.page=page
        this.phonesCategories="#cat+a"
        this.laptopsCategories="#cat+a+a"
        this.monitorsCategories="#cat+a+a+a"
        this.countOfItems='.hrefch'
    }

    async PhonesCount()
    {
        await this.page.waitForSelector(this.phonesCategories)
        await this.page.click(this.phonesCategories)
        await this.page.waitForSelector(this.countOfItems)
        const numberOfPhones=await this.page.$$(this.countOfItems)
        console.log(numberOfPhones.length)
        
    }
    async MonitorCount()
    {
        await this.page.waitForSelector(this.monitorsCategories)
        await this.page.click(this.monitorsCategories)
        await this.page.waitForSelector(this.countOfItems)
        const numberOfMonitor=await this.page.$$(this.countOfItems)
        console.log(numberOfMonitor.length)
        
    }
    async LaptopsCount()
    {
        await this.page.waitForSelector(this.laptopsCategories)
        await this.page.click(this.laptopsCategories)
        await this.page.waitForSelector(this.countOfItems)
        const numberOfLaptops=await this.page.$$(this.countOfItems)
        console.log(numberOfLaptops.length)  
    }

}