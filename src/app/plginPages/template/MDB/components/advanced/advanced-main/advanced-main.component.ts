import {Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advanced-main',
  templateUrl: './advanced-main.component.html',
  styleUrls: ['./advanced-main.component.scss']
})
export class AdvancedMainComponent implements DoCheck {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Alerts', description: 'On this page you will find examples of Angular Alerts', link: '/MDB/advanced/alerts' },
    { id: 2, name: 'Carousel', description: 'On this page you will find examples of Angular Carousel', link: '/MDB/advanced/carousel' },
    { id: 3, name: 'Fullpage Carousel', description: 'On this page you will find example of Angular Fullpage Carousel', link: '/MDB/advanced/carousel-fullpage' },
    { id: 4, name: 'Collapse', description: 'On this page you will find examples of Angular Collapse & Accordion', link: '/MDB/advanced/collapse' },
    { id: 5, name: 'Charts', description: 'On this page you will find examples of Angular Charts', link: '/MDB/advanced/charts' },
    { id: 6, name: 'Popover', description: 'On this page you will find examples of Angular Popover', link: '/MDB/advanced/popover' },
    { id: 7, name: 'Smoothscroll', description: 'On this page you will find examples of Angular Smoothscroll', link: '/MDB/advanced/smoothscroll' },
    { id: 8, name: 'Sticky Content', description: 'On this page you will find examples of Angular Sticky Content', link: '/MDB/advanced/sticky-content' },
    { id: 9, name: 'Tooltip', description: 'On this page you will find examples of Angular Tooltips', link: '/MDB/advanced/tooltip' }

  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}
