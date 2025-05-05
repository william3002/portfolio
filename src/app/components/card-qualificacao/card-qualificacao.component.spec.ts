import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQualificacaoComponent } from './card-qualificacao.component';

describe('CardQualificacaoComponent', () => {
  let component: CardQualificacaoComponent;
  let fixture: ComponentFixture<CardQualificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardQualificacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardQualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
