import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierCompComponent } from './premier-comp.component';

describe('PremierCompComponent', () => {
  let component: PremierCompComponent;
  let fixture: ComponentFixture<PremierCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
