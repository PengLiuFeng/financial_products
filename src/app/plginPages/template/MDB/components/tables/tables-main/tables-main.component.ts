import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables-main',
  templateUrl: './tables-main.component.html',
  styleUrls: ['./tables-main.component.scss']
})
export class TablesMainComponent implements DoCheck {

  isChildRouteLoaded = false;
  itemsArray = [
    { id: 1, name: 'Basic Examples', description: 'On this page you will find examples of Angular Tables', link: '/MDB/tables/basic' },
    { id: 2, name: 'Additional Examples', description: 'On this page you will find examples of Angular Additional Tables', link: '/MDB/tables/styles' },
    { id: 3, name: 'Datatables', description: 'On this page you will find examples of Angular Datatables', link: '/MDB/tables/data-tables' },
    { id: 4, name: 'Editable', description: 'On this page you will find examples of Angular Editable Tables', link: '/MDB/tables/editable' },
    { id: 5, name: 'Pagination', description: 'On this page you will find examples of Angular Pagination Tables', link: '/MDB/tables/pagination' },
    { id: 6, name: 'Responsive', description: 'On this page you will find examples of Angular Responsive Tables', link: '/MDB/tables/responsive' },
    { id: 7, name: 'Search', description: 'On this page you will find examples of Angular Search Tables', link: '/MDB/tables/search' },
    { id: 8, name: 'Sort', description: 'On this page you will find examples of Angular Sort Tables', link: '/MDB/tables/sort' },

  ];

  constructor(private router: ActivatedRoute) { }


  ngDoCheck() {
    this.router.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
  }

}
