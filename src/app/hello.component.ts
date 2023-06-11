import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.Service';

@Component({
  selector: 'app-hello',
  templateUrl: `hello.component.html`,
})
export class HelloComponent implements OnInit {
  comments: any;
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getComments().subscribe((data) => {
      this.comments = data.results;
    });
  }
}
