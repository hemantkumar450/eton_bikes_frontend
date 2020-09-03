import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthType } from '@core/enum/auth-type.enum';
import { AppConfig } from '@core/interface/config.interface';
import { AuthService } from '@core/services/auth.service';
import { ConfigService } from '@core/services/config.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  isHomePage: boolean;
  isWhiteHeader: boolean;
  userNameInitial: string;

  // On layout settings changed handler
  settings: AppConfig;
  onSettingsChanged: Subscription;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private configService: ConfigService
  ) {
    const navigationEndEvent = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navigationEndEvent.subscribe((event: NavigationEnd) => {
      if (event.url === '/') {
        this.isHomePage = true;
        this.isWhiteHeader = false;
      } else {
        this.isHomePage = false;
        this.isWhiteHeader = true;
      }
    });
  }

  isAuthenticated() {
    return this.authService.getToken() ? true : false;
  }

  onLogOut() {
    this.authService.logOut();
  }

  openLoginModal() {
    this.authService.openAuthDialog(AuthType.LOGIN);
  }

  openChangePasswordModal() {
    this.authService.openAuthDialog(AuthType.CHANGE_PASSWORD);
  }

  getUserName() {
    return this.authService.getLoggedInUser()
      ? this.authService.getLoggedInUser().name.substring(0, 1)
      : 'C';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isHomePage === true) {
      const currPos = window.pageYOffset;
      if (currPos >= 150) {
        this.isWhiteHeader = true;
      } else {
        this.isWhiteHeader = false;
      }
    }
  }

  ngAfterViewInit(): void {
    // Subscribe to all the settings change events
    this.onSettingsChanged = this.configService.onAppConfigChanged.subscribe(
      (newSettings: AppConfig) => {
        this.settings = newSettings;
        this.cdr.detectChanges();
      }
    );
  }
}
