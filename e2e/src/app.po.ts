import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  clickLinkByText(text: string): Promise<void> {
    return element(by.linkText(text)).click() as Promise<void>;
  }

  fillInMadLibText(text: string): Promise<void> {
    return element(by.css('input[type="text"]')).sendKeys(text) as Promise<void>;
  }

  saveMadLib(): Promise<void> {
    return element(by.buttonText('Save')).click() as Promise<void>;
  }
}
