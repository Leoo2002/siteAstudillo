import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramationComponent } from './programation.component';

describe('ProgramationComponent', () => {
  let component: ProgramationComponent;
  let fixture: ComponentFixture<ProgramationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
