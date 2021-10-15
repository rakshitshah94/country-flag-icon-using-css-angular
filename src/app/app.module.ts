import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OnlineStatusModule } from 'ngx-online-status';

/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link: https://medium.com/beingcoders/simple-steps-to-add-country-flags-to-your-angular-react-or-vue-applications-b415da1536ab?sk=3fd00879906dc74c0777dc21b5ba822b
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //Add import OnlineStatusModle from ngx-online-status package.
    OnlineStatusModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
