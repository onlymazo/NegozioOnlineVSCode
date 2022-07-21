import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticoloformComponent } from './articoloform.component';

describe('ArticoloformComponent', () => {
  let component: ArticoloformComponent;
  let fixture: ComponentFixture<ArticoloformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticoloformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticoloformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
