const { count } = require("console");

exports.AddCartPage=class AddCartPage{

    constructor(page)
    {

        this.page=page;
        this.addCartButton="[class='btn btn-success btn-lg']";
        this.cartLink="#cartur";
        this.placeOrderButton="[class='btn btn-success']";
        this.item="#tbodyid";
        this.name="#name";
        this.country="#country";
        this.city="#city";
        this.card="#card";
        this.month="#month";
        this.year="#year";
        this.purchaseButton="//button[text()='Purchase']";
    }

    async itemAddToCart()
    {
        await this.page.locator(this.addCartButton).click()
    }

    async clickOnCartLink()
    {
        await this.page.locator(this.cartLink).click()
        this.page.on('dialog', async dialog=>{

            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('I am an alert box!')
            await dialog.accept()
           })   
    }

    async clickOnPlaceOrderButton()
    {
        await this.page.waitForSelector(this.item)
        await this.page.locator(this.placeOrderButton).click()
    }

    async purchaseDetailes(name,country,city,card,month,year)
    {
        await this.page.fill(this.name, name)
        await this.page.fill(this.country, country)
        await this.page.fill(this.city,city)
        await this.page.fill(this.card,card)
        await this.page.fill(this.month,month)
        await this.page.fill(this.year,year)
        await this.page.click(this.purchaseButton)
    }

}