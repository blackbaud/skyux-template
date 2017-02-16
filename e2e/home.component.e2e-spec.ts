// Use browser to access other sites (that are running angular)
import { element, by } from 'protractor';

// Use SkyHostBrowser to access your locally served SPA
import { SkyHostBrowser } from '@blackbaud/skyux-builder/runtime/testing';

describe('Home Component', () => {

  // done is optional callback if you're doing async tests
  it('should render', (done) => {

    // Change to your SPA's name
    SkyHostBrowser.get('/rrrrr-app-name');
    expect(element(by.tagName('h1')).getText()).toBe('SKY UX Template');
    expect(element(by.className('sky-alert')).getText()).toBe(
      `You've just taken your first step into a larger world.`
    );

    // Since we've said this is an async test, we need to call done
    done();
  });
});
