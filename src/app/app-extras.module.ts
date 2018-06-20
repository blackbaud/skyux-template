import {
  NgModule
} from '@angular/core';

require('style-loader!@blackbaud/skyux/dist/css/sky.css');

import {
  SkyModalModule
} from '@blackbaud/skyux/dist/modules/modal';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    SkyModalModule
  ],
  exports: [
    SkyModalModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
