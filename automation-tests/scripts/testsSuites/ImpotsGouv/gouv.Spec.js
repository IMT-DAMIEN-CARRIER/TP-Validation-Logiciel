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
        await browser.sleep(3000);
    });

    it("Accéder à mon espace", async () => {
        await utils.impotBtn("Particulier");
        await browser.sleep(3000);
    });

    it("Tests hardcodés", async () => {
        let btnPopup = await element(by.cssContainingText('button', "J'accepte"));

        if (!await btnPopup.isPresent()) {
            throw new Error("Echec de l'identification du bouton J'accepte");
        }

        btnPopup.click();

        await browser.sleep(3000);

        let elt = await element(by.css('svg#patrimoine'));

        if (!await elt.isPresent()) {
            throw new Error("Echec de l'identification du bouton");
        }

        elt.click();
        await browser.sleep(3000);

        await element(by.cssContainingText('td', 'Déclarer mes revenus')).click();
        await browser.sleep(3000);
        await element(by.cssContainingText('a', 'Je déclare mes autres revenus')).click();
        await browser.sleep(3000);
        await element(by.css('input#search-field')).click();
        await browser.sleep(3000);
        await element(by.css('input#search-field')).sendKeys("Test terminé");
        await browser.sleep(3000);

    });

});