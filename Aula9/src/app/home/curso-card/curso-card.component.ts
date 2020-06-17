import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.css']
})
export class CursoCardComponent implements OnInit {

  @Input() course;

  //course = {name: '', description: '', imageSrc: 'https://www.vitruvius.com.br/media/images/magazines/grid_9/85824723178d_entre07602_tabacow_13.jpg'};
  // description : string = '';
  // courseName : string = '';
  imageSrc : string = 'https://www.vitruvius.com.br/media/images/magazines/grid_9/85824723178d_entre07602_tabacow_13.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
