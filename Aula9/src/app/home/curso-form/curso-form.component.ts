import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';


@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  @Output() cursoAdicionado:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createCurso(_name:string, _description:string) {
    if (_name !== '' && _description !== ''){
      const curso = {name:_name, description:_description};
      console.log(curso);

      this.cursoAdicionado.emit(curso);
    }
  }
}
