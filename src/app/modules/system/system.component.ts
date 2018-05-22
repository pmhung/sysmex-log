import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  appChildrens: any = [
    { name: '', title: 'Rule Wizard', icon: 'rules_icon.jpg', path: '/dashboard/system/rule-wizard' },
    { name: '', title: 'Rule Flow Definition', icon: 'Wezard_icon.jpg' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
