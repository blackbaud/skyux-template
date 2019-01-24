import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyFluidGridModule,
    SkyKeyInfoModule
  ]
})
export class AppExtrasModule { }
