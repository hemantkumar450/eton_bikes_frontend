//loader.interceptor.ts
import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-dashboard-loading',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean = true;
  loadingText = 'NOW LOADING...';
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(res => {
      this.loading = res.loading;
      if (res.loadingText) {
        this.loadingText = res.loadingText;
      } else {
        this.loadingText = 'NOW LOADING...';
      }
    });
  }
  ngOnInit() {}
}
