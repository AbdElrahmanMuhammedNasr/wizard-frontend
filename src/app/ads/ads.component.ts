import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  recentlyAds = [1, 1, 1, 1];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onAddNewAdd(): void {
    this.router.navigate(['/addnewad']).then();
  }
}
