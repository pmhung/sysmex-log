import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-children',
  templateUrl: './app-children.component.html',
  styleUrls: ['./app-children.component.css']
})
export class AppChildrenComponent implements OnInit {
  @Input() detail: any;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  gotoApp() {
    if (this.detail.path) {
      this.router.navigate([this.detail.path]);
    }
  }
}
