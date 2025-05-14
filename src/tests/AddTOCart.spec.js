import {test} from '@playwright/test'
import{HomePage} from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { page } from '../setup/Hooks'
import { AddCartPage } from '../pages/AddCartPage'
const { getEnvData } = require('../utils/envLoader');

const env = process.env.TEST_ENV || 'qa';
const testdata = getEnvData(env);
require('../setup/Hooks')

test('Add To Cart', async()=>{
    const login=new LoginPage(page)
    login.loginToApplication(testdata.username, testdata.password)
    const homePage=new HomePage(page)
    await homePage.PhonesCount()
    await homePage.selectItem(testdata.itemName)
    const addCart=new AddCartPage(page)
    await addCart.itemAddToCart()
    await addCart.clickOnCartLink()
    await addCart.clickOnPlaceOrderButton()
    await addCart.purchaseDetailes(testdata.name,testdata.country,testdata.city,testdata.card,testdata.month,testdata.year)
})