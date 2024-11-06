import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbookComponent } from './handbook.component';

describe('HandbookComponent', () => {
  let component: HandbookComponent;
  let fixture: ComponentFixture<HandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
