import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/simple-steps-to-add-country-flags-to-your-angular-react-or-vue-applications-b415da1536ab?sk=3fd00879906dc74c0777dc21b5ba822b
 */

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
