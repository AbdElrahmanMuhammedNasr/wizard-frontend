import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveAds = [
    {
      number: 1,
      image: '../../assets/1.jpeg'
    }, {
      number: 2,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    },
    {
      number: 1,
      image: '../../assets/1.jpeg'
    }, {
      number: 2,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    }, {
      number: 6,
      image: '../../assets/1.jpeg'
    },

  ];

  statistic = [
    {
      name: 'Total Ads',
      number: 12
    }, {
      name: 'Total views',
      number: 12
    }, {
      name: 'Total Action',
      number: 12
    }, {
      name: 'Facebook Ads',
      number: 12
    }, {
      name: 'Instagram Ads',
      number: 12
    }, {
      name: 'Twitter Ads',
      number: 12
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
