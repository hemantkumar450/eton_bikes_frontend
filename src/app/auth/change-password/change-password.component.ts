import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: any,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle('PumPumPum - Change Password');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const blankSpace: HTMLElement = this.document.getElementById(
        'login-page-space'
      );
      const loginElement: HTMLElement = this.document.getElementById(
        'login-page-block'
      );
      loginElement.setAttribute('style', 'display: flex');
      blankSpace.remove();
    }
  }

}