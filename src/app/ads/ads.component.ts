import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  recentlyAds = [1, 1, 1,  1];

  constructor() {
  }

  ngOnInit(): void {
  }

}
