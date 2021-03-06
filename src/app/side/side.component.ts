import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  sidebarControllersButtons = [
    {
      name: 'Analytics',
      icon: 'fa fa-line-chart',
    }, {
      name: 'My Ads',
      icon: 'fa fa-id-badge',
    }, {
      name: 'Add New ad',
      icon: 'fa fa-paper-plane-o',
    }, {
      name: 'Archive',
      icon: 'fa fa-file-archive-o',
    }, {
      name: 'Setting',
      icon: 'fa fa-cog',
    },  {
      name: 'Membership',
      icon: 'fa fa-credit-card',
    } ,
    {
      name: 'Support',
      icon: 'fa fa-question-circle',
    }
  ];


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateTo(destination: string): void {
   const newDestination = destination.split(' ').join('').toLowerCase();

   this.router.navigate(['/' + newDestination]).then();
  }
}
