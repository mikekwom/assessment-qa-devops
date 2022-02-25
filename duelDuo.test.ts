import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})


test('draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices =  await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

// test('add to duo btn displays player-duo', async () => {
//     await driver.findElement(By.id('draw')).click()
//     await driver.sleep(2000)
//     await driver.findElement(By.className('bot-btn')).click()
//     await driver.sleep(2000)
//     const newBot =  await driver.findElement(By.id('player-duo'))
//     const displayed = await newBot.isDisplayed()
//     expect(displayed).toBe(true)

//     await driver.sleep(2000)
// })