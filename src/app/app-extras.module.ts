import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyErrorModule
} from '@skyux/errors';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyModalModule
} from '@skyux/modals';

// import {
//   SkyNavbarModule
// } from '@blackbaud/skyux/modules/navbar';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyErrorModule,
    SkyKeyInfoModule,
    SkyModalModule
  ]
})
export class AppExtrasModule { }
