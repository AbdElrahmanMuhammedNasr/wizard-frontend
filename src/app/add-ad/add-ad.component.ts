import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.scss']
})
export class AddAdComponent implements OnInit {

  constructor() {
  }


  socialMediaButtons = [
    {
      name: 'Facebook',
      icon: 'fa fa-facebook-square',
      color: 'btn btn-primary',
    }, {
      name: 'Instagram',
      icon: 'fa fa-instagram',
      color: 'btn btn-danger',

    }, {
      name: 'Twitter',
      icon: 'fa fa-twitter-square ',
      color: 'btn btn-success',
    }
  ];

  post: any;

  selectedDate: any;
  selectedTime: any;

  ngOnInit(): void {
  }

  onChangeDateSingle(event: any): void {
    this.selectedDate = event.toString().substring(0, 15);
  }

  onChangeTimeSingle(event: any): void {
    this.selectedTime = event.toString().substring(16, 21);
  }


  onPost(where: string): void {
    console.log(where.toLowerCase());
    console.log(this.post);
    console.log(this.selectedDate);
    console.log(this.selectedTime);

  }

}
