import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  verifyLoader = true;
  verified = false;
  errorText = ''
  constructor(private route: ActivatedRoute, private authService: AuthService) { 
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('token'), 'Email Verify Token');
      // this.authService.verifyEmail( {token : paramMap.get('token') }).subscribe(
      //   (data) => {
      //     console.log(data, 'REsponse');
      //     this.verifyLoader = false;
      //     this.verified = true;
      //   },
      //   error => {
      //     this.verified = false;
      //     this.verifyLoader = false;
      //     console.log(error, 'Error');
      //     this.errorText = error.error.message;
      //   }
      // )
    });
  }

  ngOnInit(): void {
  }

}
