import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { AppService } from "../../../../app.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public route: ActivatedRoute, private appService: AppService) {
  }
  appChildrens: any = [
    // { name: '', title: 'Sample Explorer', icon: 'icon1.png' },
    // { name: '', title: 'System', icon: 'icon2.png', path: '/dashboard/system' },
    // { name: '', title: 'Enter Orders', icon: 'icon3.png' },
    // { name: '', title: 'Critical Results', icon: 'icon4.png' },
    // { name: '', title: 'Barcode Errors', icon: 'icon5.png' },
    // { name: '', title: 'Smear Status', icon: 'icon6.png' },
    { name: '', title: 'Show Logs', icon: 'icon7.png', path: '/show-logs' },
    // { name: '', title: 'Alert Module', icon: 'icon8.png' },
    // { name: '', title: 'Auto-Validation Control', icon: 'icon9.png' },
    // { name: '', title: 'Unregisterd Results', icon: 'icon10.png' },
    // { name: '', title: 'Specimen Tracking', icon: 'icon11.png' },
    // { name: '', title: 'Modify Sample ID', icon: 'icon12.png' },
    // { name: '', title: 'Quality Control', icon: 'icon13.png' }
  ]
  ngOnInit() {
    // this.appService.user.isAuthor=true;
  }

}
