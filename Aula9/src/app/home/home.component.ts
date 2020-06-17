import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formsShowMoreBtnText:string = 'Cadastrar um Curso';
  isFormsHidden : boolean = true;

  cursos = [];

  constructor() { }

  ngOnInit(): void {
  }

  showForms() {
    this.isFormsHidden = !this.isFormsHidden;

    this.formsShowMoreBtnText = (this.isFormsHidden ? "Cadastrar um Curso" : "Esconder");
  }

  onCursoAdicionado(curso) {
    this.cursos.push(curso);
  }

}
