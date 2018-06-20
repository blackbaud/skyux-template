import {
  NgModule
} from '@angular/core';

require('style-loader!@blackbaud/skyux/dist/css/sky.css');

import {
  SkyModule
} from '@blackbaud/skyux/dist/core';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  exports: [
    SkyModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
