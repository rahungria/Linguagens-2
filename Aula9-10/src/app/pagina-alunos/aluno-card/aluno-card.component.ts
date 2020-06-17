import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-aluno-card',
  templateUrl: './aluno-card.component.html',
  styleUrls: ['./aluno-card.component.css']
})
export class AlunoCardComponent implements OnInit {

  @Input() aluno:Aluno;

  constructor() { }

  ngOnInit(): void {
  }

}
