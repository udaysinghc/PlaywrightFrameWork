import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {page} from '../setup/Hooks' 
const { getEnvData } = require('../utils/envLoader');
require('../setup/Hooks')
const env = process.env.TEST_ENV || 'qa';
const testdata = getEnvData(env);

test.describe('descibe test', async()=>{

    test('login',async({})=>{

    const login=new LoginPage(page)
    console.log("This is a test method...")
    await login.loginToApplication(testdata.username,testdata.password)
    console.log("ending of test method..")
    })
   
})