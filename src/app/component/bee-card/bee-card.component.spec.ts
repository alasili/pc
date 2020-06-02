import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeCardComponent } from './bee-card.component';

describe('BeeCardComponent', () => {
  let component: BeeCardComponent;
  let fixture: ComponentFixture<BeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
