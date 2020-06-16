import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugsComponent } from './sugs.component';

describe('SugsComponent', () => {
  let component: SugsComponent;
  let fixture: ComponentFixture<SugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
