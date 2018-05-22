import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit {
  public user: User;

  constructor(private router: Router) { 
    this.user=new User();
  }

  ngOnInit() {
    this.user =JSON.parse(localStorage.getItem("currentUser"));
  }
  ngAfterViewInit() {
    $('.btn-expand-collapse-2').click(function (e) {
      $('.navbar-primary').toggleClass('collapsed');
      $('.navbar-primary').parent().toggleClass('collapsed-width');
      $('.footer-menu').toggleClass('collapse');
    })
  }
  public logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
