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
    },  {
      number: 6,
      image: '../../assets/1.jpeg'
    },


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
