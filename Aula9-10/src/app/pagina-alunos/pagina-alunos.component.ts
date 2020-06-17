import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-pagina-alunos',
  templateUrl: './pagina-alunos.component.html',
  styleUrls: ['./pagina-alunos.component.css']
})
export class PaginaAlunosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cursos = [
    'Comp',
    'Eletrica',
    'Gergevs',
    'Fiquei sem Ideia...'
  ];

  alunos:Aluno[] = [{name:'josé',age:'12',email:'zezinho@gamil.com',curso:'Comp'}];

  salvar(alunoForm:Aluno) {
    this.alunos.push(alunoForm);
  }
}
