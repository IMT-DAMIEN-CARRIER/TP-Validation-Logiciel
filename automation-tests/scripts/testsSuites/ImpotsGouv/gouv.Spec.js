/**
 * Author: TMO 2021-11-20
 */
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

browser.ignoreSynchronization = true;

const utils = require('../../utils');
const init = require('../../init');

describe("Page de connexion", async () => {
	
	it("Lancement du navigateur et accès à l'url renseignée", async () => {
        await utils.pageAccess(init.impotsUrl);
    });
	
    it("Tests hardcodés", async () => {
        await element(by.css('a.ban_individual')).click();
		await element(by.css('svg#patrimoine')).click();
		await element(by.cssContainingText('td', 'Déclarer mes revenus')).click();
		await browser.sleep(1000);
		await element(by.cssContainingText('a', 'Je déclare mes autres revenus')).click();
		await browser.sleep(1000);
		await element(by.css('input#search-field')).click();
		await browser.sleep(1000);
		await element(by.css('input#search-field')).sendKeys("Test terminé");
		await browser.sleep(5000);
    });
	
});