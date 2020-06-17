import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  breadcrumbPath:string[] = ['Pagina Inicial'];

  ngOnInit(): void {
  }

  addBreadcrumbPath(item:string) {
    if (item === '') {
      this.breadcrumbPath = ['Página Inicial'];
    }
    else {
      this.breadcrumbPath = ['Página Inicial', item];
    }
  }

  isLastBreadcrumb(index:number) {
    return (index === this.breadcrumbPath.length-1);
  }
}
