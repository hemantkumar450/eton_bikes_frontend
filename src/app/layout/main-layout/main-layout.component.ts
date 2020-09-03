import { Component, OnDestroy } from '@angular/core';
import { AppConfig } from '@core/interface/config.interface';
import { ConfigService } from '@core/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnDestroy {
  /**
   * On layout settings changed handler
   */
  onConfigChanged: Subscription;

  /**
   * Current configuration object
   */
  appConfig: AppConfig;
  constructor(public configService: ConfigService) {
    // Subscribe to all the settings change events
    this.onConfigChanged = this.configService.onAppConfigChanged.subscribe(
      (config: AppConfig) => (this.appConfig = config)
    );
  }

  ngOnDestroy(): void {
    this.onConfigChanged.unsubscribe();
  }
}
