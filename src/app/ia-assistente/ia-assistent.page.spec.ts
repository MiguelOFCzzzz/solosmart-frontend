import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IaAssistentePage } from './ia-assistente.page';

describe('IaAssistentePage', () => {
  let component: IaAssistentePage;
  let fixture: ComponentFixture<IaAssistentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IaAssistentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
