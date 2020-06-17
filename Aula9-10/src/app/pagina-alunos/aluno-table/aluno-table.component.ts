import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-aluno-table',
  templateUrl: './aluno-table.component.html',
  styleUrls: ['./aluno-table.component.css']
})
export class AlunoTableComponent implements OnInit {

  @Input() alunos;

  constructor() { }

  ngOnInit(): void {
  }

}
