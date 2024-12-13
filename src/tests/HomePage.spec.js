import {test} from '@playwright/test'
import{HomePage} from '../pages/HomePage'
import { page } from '../setup/Hooks'
require('../setup/Hooks')

test.describe('Home Page Test', async()=>{

    
    test('Phone Module', async()=>{

        const homePage=new HomePage(page)
        await homePage.PhonesCount()
    })

    test('Laptop Module', async()=>{

        const homePage=new HomePage(page)
        await homePage.LaptopsCount()
    })

    test('Monitor Module', async()=>{
        const homePage=new HomePage(page)
        await homePage.MonitorCount()
    })

})