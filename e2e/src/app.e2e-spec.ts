import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Mad Libs', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Creating Mad Libs', () => {
    it('provides a form to fill out a mad lib and the ability to save it and view it', () => {
      page.navigateTo();
      page.clickLinkByText('Create Mad Lib');

      page.fillInMadLibText('___________ is authorized to be at ___________ instead of ___________ class.')

      page.saveMadLib();

      page.clickLinkByText('View Mad Libs');

      expect(element.all(by.css('li')).count()).toBe(1);
    });
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
