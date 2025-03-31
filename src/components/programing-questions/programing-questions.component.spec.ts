import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingQuestionsComponent } from './programing-questions.component';

describe('ProgramingQuestionsComponent', () => {
  let component: ProgramingQuestionsComponent;
  let fixture: ComponentFixture<ProgramingQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramingQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
