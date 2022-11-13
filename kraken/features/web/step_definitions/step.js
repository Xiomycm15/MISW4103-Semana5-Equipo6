const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click on view site', async function() {
    let element = await this.driver.$('#ember23');
    return await element.click();
})

When('I click on posts', async function() {
    let element = await this.driver.$('#ember9');
    return await element.click();
})

When('I click on pages', async function() {
    let element = await this.driver.$('#ember18');
    return await element.click();
})

When('I click on tags', async function() {
    let element = await this.driver.$('#ember19');
    return await element.click();
})

When('I click on members', async function() {
    let element = await this.driver.$('#ember20');
    return await element.click();
})

When('I click on new post', async function() {
    let element = await this.driver.$('#ember79');
    return await element.click();
})

When('I click on title input', async function() {
    let element = await this.driver.$('#ember101');
    return await element.click();
})

When('I click on publish', async function() {
    let element = await this.driver.$('.gh-btn gh-btn-editor darkgrey gh-publish-trigger');
    return await element.click();
})


