import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
const testdata=JSON.parse(JSON.stringify(require('../testData/data.json')))
import {page} from '../setup/Hooks' 
require('../setup/Hooks')

test.describe('descibe test', async()=>{

    test('login',async({})=>{

    // const urlOFApplication=testdata.BaseURL
    // console.log("The URL is:- ",urlOFApplication)
    const login=new LoginPage(page)
    // await login.goToLoginPage(urlOFApplication)
    console.log("This is a test method...")
    await login.loginToApplication(testdata.username,testdata.password)
    console.log("ending of test method..")
    })
   
})