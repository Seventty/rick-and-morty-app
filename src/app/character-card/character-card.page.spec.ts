import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardPage } from './character-card.page';

describe('CharacterCardPage', () => {
  let component: CharacterCardPage;
  let fixture: ComponentFixture<CharacterCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
