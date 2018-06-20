import {
  NgModule
} from '@angular/core';

require('style-loader!@blackbaud/skyux/dist/css/sky.css');

import {
  SkyAlertModule
} from '@blackbaud/skyux/dist/modules/alert';

import {
  SkyAvatarModule
} from '@blackbaud/skyux/dist/modules/avatar';

import {
  SkyErrorModule
} from '@blackbaud/skyux/dist/modules/error';

import {
  SkyKeyInfoModule
} from '@blackbaud/skyux/dist/modules/key-info';

import {
  SkyModalModule
} from '@blackbaud/skyux/dist/modules/modal';

import {
  SkyNavbarModule
} from '@blackbaud/skyux/dist/modules/navbar';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyErrorModule,
    SkyKeyInfoModule,
    SkyModalModule,
    SkyNavbarModule
  ],
  exports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyErrorModule,
    SkyKeyInfoModule,
    SkyModalModule,
    SkyNavbarModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
