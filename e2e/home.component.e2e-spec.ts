import { browser, ExpectedConditions } from 'protractor';
import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime';

describe('Home Component', () => {
  it('should render', (done) => {
    SkyHostBrowser.get('/');
    expect(element(by.tagName('h1')).getText()).toBe('SKY UX Template');
    expect(element(by.className('sky-alert')).getText()).toBe(
      `You've just taken your first step into a larger world.`
    );
    done();
  });
});
