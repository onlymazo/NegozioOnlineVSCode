import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticolilistComponent } from './articolilist.component';

describe('ArticolilistComponent', () => {
  let component: ArticolilistComponent;
  let fixture: ComponentFixture<ArticolilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticolilistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticolilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
