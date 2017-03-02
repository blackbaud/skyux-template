import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

// Component we're going to test
import { AboutComponent } from './about.component';

describe('About component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should expose the team array', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance.team).toBeDefined();
    expect(fixture.componentInstance.team[0]).toEqual({
      name: 'Robert Hernandez',
      email: 'rh@edu.org'
    });
  });

  it('should display a new item in the team array', () => {
    const name = 'Blackbaud';
    const email = 'no-reply@blackbaud.com';
    const fixture = TestBed.createComponent(AboutComponent);

    fixture.componentInstance.team.push({
      name: 'Blackbaud',
      email: 'no-reply@blackbaud.com'
    });

    fixture.detectChanges();

    const names = fixture.nativeElement.querySelectorAll('sky-key-info-value');
    const emails = fixture.nativeElement.querySelectorAll('sky-key-info-label');

    // Using custom expect matchers
    expect(names[names.length - 1]).toHaveText(name);
    expect(emails[emails.length - 1]).toHaveText(email);
  });

});
