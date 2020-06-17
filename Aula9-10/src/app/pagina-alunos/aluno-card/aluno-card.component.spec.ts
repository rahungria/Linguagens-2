import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCardComponent } from './aluno-card.component';

describe('AlunoCardComponent', () => {
  let component: AlunoCardComponent;
  let fixture: ComponentFixture<AlunoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
