import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

// Component we're going to test
import { HomeComponent } from './home.component';

describe('Home component', () => {

  /**
    * This configureTestingModule function imports the SkyAppTestModule, which brings in all of
    * the SKY UX modules and components in your application for testing convenience. If this is
    * having an adverse effect on your test performance, you can bring in each of your app
    * components and SKY UX modules those components rely upon individually.
    */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should display a sky-alert', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const alertEl = fixture.nativeElement.querySelector('sky-alert');

    // Using custom expect matchers
    expect(alertEl).toBeVisible();
    expect(alertEl).toHaveText(`You've just taken your first step into a larger world.`);
  });

});
