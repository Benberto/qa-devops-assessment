
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})
describe('Test Duel Duo', () => {
test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Draw button should display', async () => {
    const button = await driver.findElement(By.id('draw'))
    await button.click()
    await driver.sleep(3000)
    const bots = await driver.findElement(By.css('div#choices.container'))
    const displayBots = await bots.isDisplayed()
    expect(displayBots).toBe(true)

});


test("Add to Duo button adds bot to duo", async () => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    await driver.sleep(3000)
    const bots = await driver.findElement(By.css('div#choices.container'))
    const displayBots = await bots.isDisplayed()
    const botBtn = await driver.findElement(By.className("bot-btn"));
    await botBtn.click();
    await driver.sleep(3000)
    const playerBot = await driver.findElement(By.id("player-duo"));
    const isDisplayed = await playerBot.isDisplayed();
    expect(isDisplayed).toBe(true);
});

});