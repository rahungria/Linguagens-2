import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';


@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  @Output() cursoAdicionado:EventEmitter<any> = new EventEmitter();

  validInput:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateInput(name:string, description:string) {
    this.validInput = name !== '' && description !== '';
  }

  createCurso(_name:string, _description:string) {
    if (this.validInput){
      const curso = {name:_name, description:_description};
      console.log(curso);

      this.cursoAdicionado.emit(curso);
    }
  }

  getButtonColor():string {
    return (this.validInput ? 'white' : 'red');
  }
}
