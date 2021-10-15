import { Component } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

/**
 * Author: Rakshit Shah
 * Email: rakshitshah1994@gmail.com
 * Link:
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status: OnlineStatusType; //Enum provided by ngx-online-status
  onlineStatusCheck: any = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online status Type
      this.status = status;
    });
  }
}
