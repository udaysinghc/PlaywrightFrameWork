import {test} from '@playwright/test'
import{HomePage} from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { page } from '../setup/Hooks'
import { AddCartPage } from '../pages/AddCartPage'
const testdata=JSON.parse(JSON.stringify(require('../testData/data.json')))
require('../setup/Hooks')

test('Add To Cart', async()=>{
    const login=new LoginPage(page)
    login.loginToApplication(testdata.username, testdata.password)
    const homePage=new HomePage(page)
    console.log(testdata.itemName)
    await homePage.PhonesCount()
    await homePage.selectItem(testdata.itemName)
    const addCart=new AddCartPage(page)
    await addCart.itemAddToCart()
    await addCart.clickOnCartLink()
    await addCart.clickOnPlaceOrderButton()
    await addCart.purchaseDetailes(testdata.name,testdata.country,testdata.city,testdata.card,testdata.month,testdata.year)
})