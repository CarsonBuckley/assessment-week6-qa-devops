
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterEach(async () => {
    await driver.sleep(2000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking 'Draw' button displays the div with id = 'choices'", async () => {
    const button = await driver.findElement(By.className('bot-btn'))
    const div = await driver.findElement(By.id('choices'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    const button = await driver.findElement(By.className('bot-btn'))
    const div = await driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(true)
})