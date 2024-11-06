import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerritoComponent } from './perrito.component';

describe('PerritoComponent', () => {
  let component: PerritoComponent;
  let fixture: ComponentFixture<PerritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
