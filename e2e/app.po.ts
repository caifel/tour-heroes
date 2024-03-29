import { browser, element, by } from 'protractor';

export class HeroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ho-root h1')).getText();
  }
}
